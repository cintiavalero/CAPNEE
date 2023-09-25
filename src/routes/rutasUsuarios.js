//Requiero desde express el metodo Router, este me permite definir nuevas
//rutas para mi servidor
const { Router } = require("express");

const UsuarioController = require("../controllers/usuariosControllers");
//Instanciamos ese metodo
const router = Router();

router.get("/usuarios", async (req, res, next) => {
  await UsuarioController.getUsuarios(req, res, next);
});
router.get("/usuarios/:id", async (req, res, next) => {
  await UsuarioController.getUser(req, res, next);
});

router.post("/usuarios", async (req, res, next) => {
  await UsuarioController.createUser(req, res, next);
});

router.put("/usuarios/:id", (req, res) => {
  res.json({
    Titulo: "Ruta para modificar usuario de id pasado por parametro en la URL",
  });
});

module.exports = router;
