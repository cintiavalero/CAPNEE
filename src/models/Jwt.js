const jwt = require('jsonwebtoken');

const key="asdasfgsdgsfdgfdgfdg8282";


function crearToken(informacionUsuario){
    const opciones = {
        expiresIn: '8h' 
      };
    return jwt.sign(informacionUsuario, key, opciones);
}


function validarToken(token) {
    try {
      const decodedToken = jwt.verify(token, key);
      return decodedToken;
    } catch (error) {
      console.error('Error al validar el token:', error.message);
      return null;
    }
  }
  

module.exports={
    crearToken,
    validarToken
}