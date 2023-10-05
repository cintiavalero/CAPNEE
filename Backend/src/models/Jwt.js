require("dotenv").config();
const jwt = require("jsonwebtoken");

class Jwt {
  async crearToken(informacionUsuario) {
    try {
      const options = {
        expiresIn: process.env.JWT_EXPIRE,
      };
      const token = await jwt.sign(
        informacionUsuario,
        process.env.SECRET_KEY_JWT,
        options
      );
      return token;
    } catch (err) {
      return res.status(500).json({
        mensaje: "Error del servidor",
      });
    }
  }

  async verificarToken(req, res, next) {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader) {
        return res.status(401).json({
          mensaje: "Acceso no autorizado. Se requiere autenticación.",
        });
      }
      const token = authHeader.replace("Bearer ", "");
      await jwt.verify(token, process.env.SECRET_KEY_JWT, (err) => {
        if (err) {
          return res
            .status(403)
            .json({ mensaje: "Acceso prohibido. El token no es válido." });
        }
        next();
      });
    } catch (err) {
      return res.status(500).json({
        mensaje: "Error del servidor",
      });
    }
  }
}

module.exports = new Jwt();
