const { DataTypes } = require("sequelize");
const { sequelize: sequelize } = require("../database/database");
const Persona = require("./Persona");

const Alumno = sequelize.define(
  "alumno",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    legajo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    imagen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Alumno.belongsTo(Persona, { foreignKey: "idpersona" });

Persona.hasOne(Alumno, { foreignKey: "idpersona" });

module.exports = Alumno;
