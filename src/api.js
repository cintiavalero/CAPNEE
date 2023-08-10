//Importamos todo el modulo'express' y lo almacenamos en la constante express
const express = require("express");
//Importamos el modulo 'morgan' que nos provee informacion de todas las peticiones que se realizan
const morgan = require("morgan");
//Creamos una instancia de la aplicacion Express llamada 'app' esta instancia va a ser la encargada de adminsitrar todas las peticiones
const app = express();
const routesUsers = require("./routes/rutasUsuarios");
const rutaAutenticacion = require("./routes/rutaAutenticacion");
const { sequelize } = require("./database/database");

const Alumno = require("./models/Alumno");
const FaceModel = require("./models/faceModel");
//Configuracion de la app
app.use(morgan("dev"));
app.set("json spaces", 2);
app.set("puerto", process.env.PORT || 4000);
app.use(express.json({ limit: "10mb" })); //Permitimos recibir formatos json y entenderlos

//Rutas
app.use(routesUsers);
app.use(rutaAutenticacion);

app.use("/", async (req, res) => {
  await sequelize.sync({ force: true });
});

//Le asignamos un puerto por el cual va a escuchar nuestra aplicacion
app.listen(app.get("puerto"), () => {
  console.log(` Aplicacion corriendo en el puerto ${app.get("puerto")}`);
});
