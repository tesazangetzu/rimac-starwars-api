const { Router } = require("express");
const starWarsController = require("../controllers/starWars.controller.js");
const router = Router();

router.get("/", starWarsController.getAll);
router.post("/", starWarsController.create);

module.exports = router;
