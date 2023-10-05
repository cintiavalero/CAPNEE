const { DataTypes } = require("sequelize");
const { sequelize: sequelize } = require("../database/database");

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

module.exports = Alumno;
