const { DataTypes } = require("sequelize");
const { sequelize: sequelize } = require("../database/database");
const bcrypt = require("bcrypt");
const Usuario = sequelize.define(
  "usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechanacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    passwd: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  { timestamps: false }
);

Usuario.prototype.getId = function () {
  return this.id;
};

Usuario.prototype.getNombre = function () {
  return this.nombre;
};

Usuario.beforeCreate(async (usuario) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(usuario.passwd, saltRounds);
  usuario.passwd = hashedPassword;
});

Usuario.prototype.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.passwd);
};

module.exports = Usuario;
