const { Router } = require("express");
const router = Router();

const starWarsRoutes = require("./starWars.routes.js");

router.use("/starwars", starWarsRoutes);

module.exports = router;
