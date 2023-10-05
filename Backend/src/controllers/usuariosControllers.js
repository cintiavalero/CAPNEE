const { sequelize } = require("../database/database");
const canvas = require("../../node_modules/canvas");
const faceapi = require("../../node_modules/face-api.js");
const FaceModel = require("../models/faceModel");
const Usuario = require("../models/Usuario");
const Alumno = require("../models/Alumno");
const Maestro = require("../models/Maestro");

class UsuarioController {
  async getUsuarios(req, res, next) {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      let e = new Error("Error al obtener los usuarios");
      e.statusCode = 500;
      next(e);
    }
  }

  async getUser(req, res, next) {
    try {
      const id = req.params.id;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        let e = new Error();
        e.statusCode = 400;
        e.message = "Usuario no encontrado";
        throw e;
      }
      res.json(usuario);
    } catch (error) {
      if (error.statusCode) {
        next(error);
      } else {
        let e = new Error("Error al obtener el usuario");
        e.statusCode = 500;
        next(e);
      }
    }
  }

  async createUser(req, res, next) {
    try {
      const { nombre, apellido, rol, fechaDeNacimiento, username, password } =
        req.body;

      if (
        !nombre ||
        !apellido ||
        !rol ||
        !fechaDeNacimiento ||
        !username ||
        !password
      ) {
        let e = new Error(
          "La solicitud contiene parámetros faltantes o incorrectos. Revise y proporcione los datos necesarios."
        );
        e.statusCode = 400;
        throw e;
      }
      await sequelize.transaction(async (transaction) => {
        const existingUser = await Usuario.findOne({
          where: { username: username },
        });
        if (existingUser) {
          let e = new Error(
            "El username ingresado ya esta asociado a otro usuario"
          );
          e.statusCode = 409;
          throw e;
        }
        const usuario = await Usuario.create(
          {
            nombre: nombre,
            apellido: apellido,
            fechanacimiento: fechaDeNacimiento,
            username: username,
            passwd: password,
          },
          { transaction }
        ).catch((error) => {
          let e = new Error("Error al crear el usuario");
          e.statusCode = 500;
          next(e);
        });
        if (rol === "Alumno") {
          const { legajo, imagen } = req.body;
          if (!legajo || !imagen) {
            let e = new Error(
              "La solicitud contiene parámetros faltantes o incorrectos. Revise y proporcione los datos necesarios."
            );
            e.statusCode = 400;
            throw e;
          }
          const existingAlumno = await Alumno.findOne({ where: { legajo } });
          if (existingAlumno) {
            let e = new Error(
              "El legajo ingresado ya esta asociado a otro usuario"
            );
            e.statusCode = 409;
            throw e;
          }
          //verificar userData["imagen"] si tiene contenido y existe (sacar el principio tambien)
          const alumno = await Alumno.create(
            {
              legajo: legajo,
              imagen: imagen[0],
              idusuario: usuario.id,
            },
            { transaction }
          ).catch((error) => {
            let e = new Error("Error al crear el usuario");
            e.statusCode = 500;
            next(e);
          });
          var arr = [];
          for (const imagenUsuario of imagen) {
            const buffer = Buffer.from(imagenUsuario, "base64");
            arr.push(buffer);
          }

          await this.altaFaceModel(alumno.id, arr, transaction);
        } else if (rol === "Maestro") {
          const { email } = req.body;
          if (!email) {
            let e = new Error(
              "La solicitud contiene parámetros faltantes o incorrectos. Revise y proporcione los datos necesarios."
            );
            e.statusCode = 400;
            throw e;
          }
          const existeMaestro = await Maestro.findOne({ where: { email } });
          if (existeMaestro) {
            let e = new Error(
              "El email ingresado ya esta asociado a otro usuario"
            );
            e.statusCode = 409;
            throw e;
          }
          await Maestro.create(
            {
              email: email,
              idusuario: usuario.id,
            },
            { transaction }
          ).catch((error) => {
            let e = new Error("Error al crear el usuario");
            e.statusCode = 500;
            next(e);
          });
        } else {
          let e = new Error("Rol no valido");
          e.statusCode = 400;
          throw e;
        }
        res
          .status(200)
          .json({ Exito: true, Mensaje: "Usuario creado con éxito" });
      });
    } catch (error) {
      if (error.statusCode) {
        next(error);
      } else {
        let e = new Error("Error al crear el usuario");
        e.statusCode = 500;
        next(e);
      }
    }
  }

  async altaFaceModel(idalumno, imagenesUsuario, transaction) {
    try {
      // Se cargan los modelos de deteccion de caras
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromDisk(__dirname + "/models"),
        faceapi.nets.faceLandmark68Net.loadFromDisk(__dirname + "/models"),
        faceapi.nets.faceRecognitionNet.loadFromDisk(__dirname + "/models"),
      ]);

      const descriptions = [];

      for (const imagenUsuario of imagenesUsuario) {
        const img = await canvas.loadImage(imagenUsuario);

        const faceImageFd = await faceapi
          .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptor();

        descriptions.push(faceImageFd.descriptor);
      }

      const descripcionJSON = JSON.stringify(descriptions);
      await FaceModel.create(
        {
          idalumno: idalumno,
          descripcion: descripcionJSON,
        },
        { transaction }
      );

      return true;
    } catch (error) {
      let e = new Error();
      e.statusCode = 500;
      e.message = "Error al crear las descripciones faciales del alumno";
      throw e;
    }
  }
}
module.exports = new UsuarioController();
