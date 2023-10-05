const { crearToken } = require("../models/Jwt");

const canvas = require("../../node_modules/canvas");
const faceapi = require("../../node_modules/face-api.js");

// patch nodejs environment, we need to provide an implementation of
// HTMLCanvasElement and HTMLImageElement
const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const Usuario = require("../models/Usuario");
const Alumno = require("../models/Alumno");
const Maestro = require("../models/Maestro");
const FaceModel = require("../models/faceModel");

class autenticacionController {
  async login(req, res, next) {
    try {
      if ("username" in req.body) {
        const username = req.body.username;
        const usuario = await Usuario.findOne({
          where: { username: username },
        });

        if (!usuario) {
          let e = new Error("Usuario o clave incorrectos");
          e.statusCode = 401;
          next(e);
        }

        const password = req.body.password;
        const claveEsCorrecta = await usuario.verifyPassword(password);
        if (claveEsCorrecta) {
          const alumno = await Alumno.findOne({
            where: { idusuario: usuario.getId() },
          });
          const maestro = await Maestro.findOne({
            where: { idusuario: usuario.getId() },
          });
          var rol;
          if (alumno) {
            rol = "alumno";
          } else if (maestro) {
            rol = "maestro";
          } else {
            let e = new Error("Usuario o clave incorrectos");
            e.statusCode = 401;
            next(e);
          }
          const informacionUsuario = {
            nombre: usuario.getNombre(),
            rol: rol,
          };
          const token = await crearToken(informacionUsuario);
          res.json({ token });
        } else {
          let e = new Error("Usuario o clave incorrectos");
          e.statusCode = 401;
          next(e);
        }
      } else if ("imagenUsuario" in req.body) {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromDisk(__dirname + "/models"),
          faceapi.nets.faceLandmark68Net.loadFromDisk(__dirname + "/models"),
          faceapi.nets.faceRecognitionNet.loadFromDisk(__dirname + "/models"),
        ]);

        let faces = await FaceModel.findAll();
        const labeledDescriptors = [];
        for (let i = 0; i < faces.length; i++) {
          const ls = JSON.parse(faces[i].descripcion);
          var descriptoresArray = [];
          for (let j = 0; j < ls.length; j++) {
            const arreglo = Object.values(ls[j]);
            const descriptorArray = [new Float32Array(arreglo)];
            descriptoresArray.push(descriptorArray);
          }
          const matrizPlana = [].concat.apply([], descriptoresArray);
          const a = new faceapi.LabeledFaceDescriptors(
            faces[i].idalumno.toString(),
            matrizPlana
          );
          labeledDescriptors.push(a);
        }
        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);

        // Cargar la imagen de entrada
        const buffer = Buffer.from(req.body.imagenUsuario, "base64");
        const image = await canvas.loadImage(buffer);

        // Detectar la cara utilizando el modelo personalizado
        const detections = await faceapi
          .detectSingleFace(image, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptor();

        if (detections) {
          const result = faceMatcher.findBestMatch(detections.descriptor);
          res.send(result);
        } else {
          let e = new Error(
            "El rostro no coincide con ningun usuario registrado."
          );
          e.statusCode = 401;
          next(e);
        }
      }
    } catch (error) {
      if (error.statusCode) {
        next(error);
      } else {
        let e = new Error("Error al autenticarse");
        e.statusCode = 500;
        next(e);
      }
    }
  }

  async getDetections(base64ImageData) {
    const image = await canvas.loadImage(base64ImageData);
    const faceImageFd = await faceapi
      .detectSingleFace(image)
      .withFaceLandmarks()
      .withFaceDescriptor();
    return faceImageFd;
    return new faceapi.LabeledFaceDescriptors(face.name, [
      faceImageFd.descriptor,
    ]);
  }

  async generarArreglo() {
    const listadoAlumnos = await Alumno.findAll();
    const labeledDescriptors = [];

    for (const alumno of listadoAlumnos) {
      const buffer1 = Buffer.from(alumno.imagen, "base64");
      const image1 = await canvas.loadImage(buffer1);
      const faceImageFd1 = await faceapi
        .detectSingleFace(image1)
        .withFaceLandmarks();
      return faceImageFd1;
    }
  }
}

module.exports = new autenticacionController();
