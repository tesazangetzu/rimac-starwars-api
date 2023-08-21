const models = require("../models");
const People = models.people;
const { v4: uuid } = require("uuid");

class StarWarsRepository {
  create({
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created,
    edited,
    url,
  }) {
    return People.create({
      uuid: uuid(),
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
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
