const express = require("express");
const router = express.Router();
const routesUsers = require("./routes/rutasUsuarios");
const rutaAutenticacion = require("./routes/rutaAutenticacion");

// Definir rutas principales
router.use(routesUsers);
router.use(rutaAutenticacion);

module.exports = router;
