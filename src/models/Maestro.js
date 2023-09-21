const { DataTypes } = require('sequelize');
const { sequelize: sequelize } = require('../database/database');
const Persona = require('./Persona');

const Maestro=sequelize.define('maestro',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    email:{
      type:DataTypes.STRING(50),
      allowNull:false,
      unique:true
    }
},
{timestamps:false}  );



module.exports=Maestro;