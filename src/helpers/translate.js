const arrayFields = ["films", "species", "starships", "vehicles"];

const translate = (str, language = null) => {
  const dataJson = !language
    ? require("../helpers/traslatedEnToEs.json")
    : require("../helpers/traslatedEsToEn.json");
  return dataJson[str] || str;
};

const translateObj = (d, language) => {
  let tmp = {};
  Object.entries(d).forEach((d) => {
    tmp[translate(d[0], language)] = arrayFields.find((item) => item === d[0])
      ? d[1] != ""
        ? d[1].split(",")
        : d[1]
      : d[1];
  });
  return tmp;
};

const translateKeys = (data, language = null) => {
  if (Array.isArray(data)) {
    data = data.map((d) => {
      return translateObj(d, language);
    });
    return data;
  } else {
    return translateObj(data, language);
  }
};

module.exports = {
  translateKeys,
};
