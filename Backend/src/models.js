module.exports = (sequelize) => {
  // Se importan los modelos y rutas
  const Alumno = require("./models/Alumno");
  const FaceModel = require("./models/faceModel");
  const Maestro = require("./models/Maestro");
  const Usuario = require("./models/Usuario");

  // Se configuran las asociaciones entre los modelos
  require("../src/models/asosiaciones")(sequelize);

  // Sincroniza los modelos con la base de datos (Se utiliza en esta etapa para mapear los modelos en tablas)
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Modelos sincronizados con la base de datos");
    })
    .catch((err) => {
      console.error("Error al sincronizar modelos:", err);
    });
};
