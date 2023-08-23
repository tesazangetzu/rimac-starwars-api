const { Router } = require("express");
const StarWarsController = require("../controllers/starWars.controller.js");
const router = Router();

router.post("/import", StarWarsController.import);
router.get("/people/:uuid", StarWarsController.show);
router.get("/people/", StarWarsController.getAll);
router.post("/people", StarWarsController.create);

module.exports = router;
