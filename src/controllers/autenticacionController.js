const { sequelize } = require("../database/database");
const { crearToken } = require("../models/Jwt");
//const tf = require("@tensorflow/tfjs-node");
const canvas = require("../../node_modules/canvas");
const faceapi = require("../../node_modules/face-api.js");
const tf = require("@tensorflow/tfjs");

// patch nodejs environment, we need to provide an implementation of
// HTMLCanvasElement and HTMLImageElement
const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const Usuario = require("../models/Usuario");
const Persona = require("../models/Persona");
const Alumno = require("../models/Alumno");
const Maestro = require("../models/Maestro");
const FaceModel = require("../models/faceModel");

const login = async (req, res) => {
  try {
    if ("imagenUsuario" in req.body) {
      await faceapi.nets.ssdMobilenetv1.loadFromDisk(__dirname + "/models");
      await faceapi.nets.faceLandmark68Net.loadFromDisk(__dirname + "/models");
      await faceapi.nets.faceRecognitionNet.loadFromDisk(__dirname + "/models");
      let faces = await FaceModel.findAll();
      const labeledDescriptors = [];
      for (i = 0; i < faces.length; i++) {
        const ls = JSON.parse(faces[i].descripcion);
        for (j = 0; j < ls.length; j++) {
          const arreglo = Object.values(ls[j]);
          const descriptorArray = [new Float32Array(arreglo)];
          const a = new faceapi.LabeledFaceDescriptors(
            faces[i].idalumno.toString(),
            descriptorArray
          );
          labeledDescriptors.push(a);
        }
      }

      //res.send(labeledDescriptors);
      /*const ds = JSON.parse(faces[0].descripcion);
      const ls = JSON.parse(faces[1].descripcion);
      const arreglo = Object.values(ds[0]);
      const arregloMilei = Object.values(ls[0]);
      const descriptorArrayHasbulla = [
        new Float32Array(arreglo), // Descriptor 1
      ];
      const descriptorArrayMilei = [new Float32Array(arregloMilei)];
      const a = new faceapi.LabeledFaceDescriptors(
        "hasbulla",
        descriptorArrayHasbulla
      );

      const b = new faceapi.LabeledFaceDescriptors(
        "milei",
        descriptorArrayMilei
      );
      const labeledDescriptors = [a, b];*/
      const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
      const buffer = Buffer.from(req.body.imagenUsuario, "base64");
      const image = await canvas.loadImage(buffer);
      const faceImageFd = await faceapi
        .detectSingleFace(image)
        .withFaceLandmarks()
        .withFaceDescriptor();
      const result = faceMatcher.findBestMatch(faceImageFd.descriptor);
      res.send(result);
      // res.send(float32Arrayy);

      /*
      for (i = 0; i < faces.length; i++) {
        for (j = 0; j < faces[i].descripcion.length; j++) {
          faces[i].descripcion[j] = new Float32Array(
            Object.values(faces[i].descripcion[j])
          );
          const ds = new faceapi.LabeledFaceDescriptors(
            "hasbulla",
            faces[i].descripcion[j]
          );
          return ds;
        }
      const faceMatcher = new faceapi.FaceMatcher(faces, 0.6);
      const buffer = Buffer.from(req.body.imagenUsuario, "base64");
      const image = await canvas.loadImage(buffer);
      const faceImageFd = await faceapi
        .detectSingleFace(image)
        .withFaceLandmarks()
        .withFaceDescriptor();
      const arregloAnalisis = await generarArreglo();
      res.send(arregloAnalisis);
      /*const listadoAlumnos = await Alumno.findAll();
      const labeledDescriptors = [];
      listadoAlumnos.forEach(async (alumno) => {
        const buffer1 = Buffer.from(alumno.imagen, "base64");
        const image1 = await canvas.loadImage(buffer1);
        const faceImageFd1 = await faceapi.detectSingleFace(image1);
        labeledDescriptors.push(faceImageFd1);
      }); */
      //res.send(labeledDescriptors); */
    } else {
      const usuario = await Usuario.findOne({
        where: { username: req.body["username"] },
      });
      if (!usuario) {
        res
          .status(500)
          .json({ Exito: false, Mensaje: "Usuario o Contraseña incorrectos" });
      }
      const password = req.body["password"];
      const claveEsCorrecta = await usuario.verifyPassword(password);
      if (claveEsCorrecta) {
        const persona = await Persona.findOne({
          where: { idusuario: usuario.getId() },
        });
        const alumno = await Alumno.findOne({
          where: { idpersona: persona.getId() },
        });
        const maestro = await Maestro.findOne({
          where: { idpersona: persona.getId() },
        });
        var rol;
        if (alumno) {
          rol = "alumno";
        } else if (maestro) {
          rol = "maestro";
        } else {
          res.status(500).json({
            Exito: false,
            Mensaje: "El username no es ni maestro ni profesor",
          });
        }
        const informacionUsuario = {
          nombre: persona.getNombre(),
          rol: rol,
        };
        const token = crearToken(informacionUsuario);
        res.json({ token });
      } else {
        res
          .status(500)
          .json({ Exito: false, Mensaje: "Usuario o Contraseña incorrectos" });
      }
    }
  } catch ($e) {}
};

const getDetections = async (base64ImageData) => {
  const image = await canvas.loadImage(base64ImageData);
  const faceImageFd = await faceapi
    .detectSingleFace(image)
    .withFaceLandmarks()
    .withFaceDescriptor();
  return faceImageFd;
  return new faceapi.LabeledFaceDescriptors(face.name, [
    faceImageFd.descriptor,
  ]);
};

const generarArreglo = async () => {
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
};

module.exports = {
  login,
};
