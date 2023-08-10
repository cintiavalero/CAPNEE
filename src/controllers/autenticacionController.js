const { sequelize } = require("../database/database");
const { crearToken } = require("../models/Jwt");
//const tf = require("@tensorflow/tfjs-node");
const canvas = require("../../node_modules/canvas");
const { createCanvas, loadImage } = require("../../node_modules/canvas");
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

const login = async (req, res) => {
  try {
    if ("imagenUsuario" in req.body) {
      await faceapi.nets.ssdMobilenetv1.loadFromDisk(__dirname + "/models");
      await faceapi.nets.faceLandmark68Net.loadFromDisk(__dirname + "/models");
      await faceapi.nets.faceRecognitionNet.loadFromDisk(__dirname + "/models");
      //const buffer = Buffer.from(req.body.imagenUsuario, "base64");
      //const image = await canvas.loadImage(buffer);
      //const faceImageFd = await faceapi.detectSingleFace(image);
      //res.send(faceImageFd);
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
      //res.send(labeledDescriptors);
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
