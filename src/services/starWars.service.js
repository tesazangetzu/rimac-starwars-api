require("dotenv").config();
const getData = async (schema) => {
  let res = await (
    await fetch(`${process.env.API_URL}/api/${schema}`, { method: "GET" })
  ).json();
  return res.results;
};

const getSchema = async (schema) => {
  let res = await (
    await fetch(`${process.env.API_URL}/api/${schema}/schema`, {
      method: "GET",
    })
  ).json();
  return { schema, fields: res.required };
};

module.exports = {
  getData,
  getSchema,
};
