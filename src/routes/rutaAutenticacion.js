const { Router } = require("express");
const { login } = require("../controllers/autenticacionController");
const router = Router();

router.post("/login", login);

module.exports = router;
