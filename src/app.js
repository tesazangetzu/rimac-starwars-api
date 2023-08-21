require("dotenv").config;
const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 3000;

// Settings
global.fetch = fetch;

function createServer() {
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use("/api", routes);
  app.use("*", (req, res) => {
    res.status(404).json({ status: false, message: "Endpoint Not Found" });
  });

  if (process.env.ENVIROMENT === "local") {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } else {
    return app;
  }
}

module.exports = createServer;
