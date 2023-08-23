const StarWarsRepository = require("../repository/starWars.repository.js");
const { getData } = require("../services/starWars.service.js");
const { translateKeys } = require("../helpers/translate.js");

module.exports = {
  async import(req, res) {
    try {
      const data = await getData("people");
      for (const item of data) {
        await StarWarsRepository.create(item);
      }

      return res
        .status(200)
        .json({ estatus: true, mensaje: "Datos de personas guardado" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ estatus: false, mensaje: error.message });
    }
  },

  async getAll(req, res) {
    try {
      let data = await StarWarsRepository.getAll(req.query);
      data = translateKeys(data);

      return res
        .status(200)
        .json({ estatus: true, mensaje: "Datos de personas", data });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ estatus: false, mensaje: error.message });
    }
  },

  async show(req, res) {
    try {
      let data = await StarWarsRepository.show(req.params.uuid);
      data = translateKeys(data);

      return res
        .status(200)
        .json({ estatus: true, mensaje: "Persona encontrada", data });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ estatus: false, mensaje: error.message });
    }
  },

  async create(req, res) {
    try {
      let body = req.body;
      body = translateKeys(body, "ES");

      const store = await StarWarsRepository.create(body);

      let data = await StarWarsRepository.show(store.uuid);
      data = translateKeys(data);

      return res
        .status(200)
        .json({ estatus: true, mensaje: "Persona almacenada", data });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ estatus: false, mensaje: error.message });
    }
  },
};
