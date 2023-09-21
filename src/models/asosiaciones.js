// associations.js
const DataTypes = require("sequelize");
const Alumno = require("./Alumno");
const faceModel = require("./faceModel");
const Maestro = require("./Maestro");
const Persona = require("./Persona");
const Usuario = require("./Usuario");

module.exports = () => {
  // Define las asociaciones entre modelos
  // Asociaciones de Persona
  faceModel.belongsTo(Alumno, { foreignKey: "idalumno" });

  Alumno.hasOne(faceModel, { foreignKey: "idalumno" });

  Alumno.belongsTo(Persona, { foreignKey: "idpersona" });

  Persona.hasOne(Alumno, { foreignKey: "idpersona" });

  Maestro.belongsTo(Persona, { foreignKey: "idpersona" });

  Persona.hasOne(Maestro, { foreignKey: "idpersona" });

  Persona.belongsTo(Usuario, { foreignKey: "idusuario" });

  Usuario.hasOne(Persona, { foreignKey: "idusuario" });
  /////////////
  /*
  Persona.hasMany(Publicacion, {
    foreignKey: "idPersona",
    as: "publicaciones",
  });

  Persona.belongsTo(Localidad, {
    foreignKey: "idLocalidad",
    as: "localidad",
  });

  // Asociaciones de Localidad
  Localidad.belongsTo(Provincia, {
    foreignKey: "idProvincia",
    as: "provincia",
  });
  Localidad.hasMany(Persona, {
    foreignKey: "idLocalidad",
    as: "personas",
  });
  Localidad.hasMany(Publicacion, {
    foreignKey: "idLocalidad",
    as: "publicaciones",
  });

  // Asociaciones de Provincia
  Provincia.hasMany(Localidad, {
    foreignKey: "idProvincia",
    as: "localidades",
  });

  // Asociaciones de Publicacion
  Publicacion.belongsTo(Localidad, {
    foreignKey: "idLocalidad",
    as: "localidad",
  });
  Publicacion.belongsTo(Servicio, {
    foreignKey: "idServicio",
    as: "servicio",
  });
  Publicacion.belongsTo(Persona, {
    foreignKey: "idPersona",
    as: "persona",
  });

  // Asociaciones de Servicio
  Servicio.hasMany(Publicacion, {
    foreignKey: "idServicio",
    as: "publicaciones",
  }); */
};
