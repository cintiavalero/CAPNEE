// Importa las bibliotecas necesarias para configurar la aplicación Express
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = (app) => {
  //Configuracion del puerto donde va a correr el servidor
  app.set("puerto", process.env.PORT || 4000);
  // Configuración de CORS (Habilita el intercambio de recursos entre dominios)
  app.use(cors());
  // Configuración de Morgan para el registro de solicitudes HTTP en formato "dev"
  app.use(morgan("dev"));
  // Configuración de bodyParser para analizar datos JSON en solicitudes
  app.use(bodyParser.json());
  app.set("json spaces", 2);
  app.use(express.json({ limit: "10mb" }));
};
