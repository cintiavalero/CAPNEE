const { Router } = require("express");
const autenticacionController = require("../controllers/autenticacionController");
const router = Router();

router.post("/login", async (req, res, next) => {
  await autenticacionController.login(req, res, next);
});

module.exports = router;
