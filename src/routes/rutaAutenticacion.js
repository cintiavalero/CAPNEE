const { Router } = require("express");
const autenticacionController = require("../controllers/autenticacionController");
const router = Router();

router.post("/login", async (req, res) => {
  await autenticacionController.login(req, res);
});

module.exports = router;
