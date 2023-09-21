const { DataTypes } = require('sequelize');
const { sequelize: sequelize } = require('../database/database');
const Usuario = require('./Usuario.js');
const Persona=sequelize.define('persona',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    fechanacimiento:{
      type:DataTypes.DATE,
      allowNull:false
    },
    nombre:{
        type: DataTypes.STRING(25),
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING(25),
        allowNull: false
    },
},
{timestamps:false}  );

Persona.prototype.getId = function () {
    return this.id;
  };
Persona.prototype.getNombre = function () {
    return this.nombre;
  };




module.exports = Persona;
