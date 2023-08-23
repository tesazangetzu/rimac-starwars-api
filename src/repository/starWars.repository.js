const models = require("../models");
const People = models.people;
const { v4: uuid } = require("uuid");

const arrFields = [
  "uuid",
  "name",
  "birthYear",
  "eyeColor",
  "gender",
  "hairColor",
  "height",
  "homeworld",
  "mass",
  "skinColor",
  "url",
  "films",
  "species",
  "starships",
  "vehicles",
  "created",
  "edited",
];

class StarWarsRepository {
  getAll(query) {
    let page, limit, order;
    ({ page, limit, order } = query);
    limit = parseInt(limit) || 10;
    page = parseInt(page);

    return People.findAll({
      attributes: arrFields,
      order: [["id", order || "asc"]],
      offset: page ? --page * limit : undefined,
      limit,
      raw: true,
    });
  }

  show(uuid) {
    return People.findOne({
      attributes: arrFields,
      where: { uuid },
      raw: true,
    });
  }

  create({
    birth_year,
    eye_color,
    films,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    name,
    skin_color,
    species,
    starships,
    url,
    vehicles,
    created,
    edited,
  }) {
    return People.create({
      uuid: uuid(),
      name,
      height,
      mass,
      hairColor: hair_color,
      skinColor: skin_color,
      eyeColor: eye_color,
      birthYear: birth_year,
      gender,
      homeworld,
      films: typeof films != String ? films.toString() : films,
      species: typeof species != String ? species.toString() : species,
      vehicles: typeof vehicles != String ? vehicles.toString() : vehicles,
      starships: typeof starships != String ? starships.toString() : starships,
      created,
      edited,
      url,
    });
  }
}
module.exports = new StarWarsRepository();
