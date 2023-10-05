// associations.js
const DataTypes = require("sequelize");
const Alumno = require("./Alumno");
const faceModel = require("./faceModel");
const Maestro = require("./Maestro");
const Usuario = require("./Usuario");

module.exports = () => {
  // Define las asociaciones entre modelos
  // Asociaciones de Persona
  faceModel.belongsTo(Alumno, { foreignKey: "idalumno" });

  Alumno.hasOne(faceModel, { foreignKey: "idalumno" });

  Alumno.belongsTo(Usuario, { foreignKey: "idusuario" });

  Usuario.hasOne(Alumno, { foreignKey: "idusuario" });

  Maestro.belongsTo(Usuario, { foreignKey: "idusuario" });

  Usuario.hasOne(Maestro, { foreignKey: "idusuario" });
};
