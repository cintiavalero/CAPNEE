const { DataTypes } = require("sequelize");
const { sequelize: sequelize } = require("../database/database");
const Alumno = require("./Alumno");
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

//FaceModel.beforeCreate(console.log("Creando...."));
FaceModel.belongsTo(Alumno, { foreignKey: "idalumno" });

Alumno.hasOne(FaceModel, { foreignKey: "idalumno" });

module.exports = FaceModel;
