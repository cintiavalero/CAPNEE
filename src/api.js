//Importamos todo el modulo'express' y lo almacenamos en la constante express
const express = require("express");
//Importamos la configuracion de la aplicacion
const configApp = require("./config/configApp");
//Importamos la instancia de conexion a la base de datos mediante el ORM Sequalize
const { sequelize } = require("./database/database");
//Importamos la configuracion de los modelos y sus asociaciones
const configuracionModels = require("./models");
//Importamos las rutas/endpoints que va a administrar nuestra
const routers = require("./routers.js");
//Creamos una instancia de la aplicacion Express llamada 'app' esta instancia va a ser la encargada de adminsitrar todas las peticiones
const app = express();

// Configuración de la aplicación
configApp(app);
//Configura los modelos y asociaciones
configuracionModels(sequelize);
//Rutas
app.use("/api", routers);

//Le asignamos un puerto por el cual va a escuchar nuestra aplicacion
app.listen(app.get("puerto"), () => {
  console.log(` Aplicacion corriendo en el puerto ${app.get("puerto")}`);
});
