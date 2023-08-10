const { Sequelize } = require('sequelize');


const sequelize=new Sequelize('capnee','matias','1234',{
    host:'localhost',
    dialect:'postgres'
});


module.exports = {
    sequelize 
  };
