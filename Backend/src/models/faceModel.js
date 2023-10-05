const { DataTypes } = require("sequelize");
const { sequelize: sequelize } = require("../database/database");
const FaceModel = sequelize.define(
  "facemodel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  },
  { timestamps: false }
);

FaceModel.prototype.getId = function () {
  return this.id;
};
FaceModel.prototype.getNombre = function () {
  return this.nombre;
};

module.exports = FaceModel;
