const starWarsRepository = require("../repository/starWars.repository.js");
const { getData, getSchema } = require("../services/starWars.service.js");

const translate = (str) => {
  const dataJson = require("../helpers/traslated.json");
  return dataJson[str] || str;
};

const translateKeys = (data) => {
  data = data.map((d) => {
    let tmp = {};
    Object.entries(d).forEach((d) => {
      tmp[translate(d[0])] = d[1];
    });
    return tmp;
  });
  return data;
};

module.exports = {
  async getAll(req, res) {
    try {
      let data = await getData("people");
      data = translateKeys(data);
      return res
        .status(200)
        .json({ status: true, message: "People's data", data });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  },

  async create(req, res) {
    try {
      const data = await getData("people");
      for (const item of data) {
        await starWarsRepository.create(item);
      }

      return res.status(200).json({ status: true, message: "People's store" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  },
};
