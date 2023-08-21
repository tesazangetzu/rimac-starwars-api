"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const { INTEGER, UUIDV4, STRING, DATE } = DataTypes;
  class PeopleModel extends Model {}

  PeopleModel.init(
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      uuid: UUIDV4,

      birth_year: STRING,
      eye_color: STRING,
      films: STRING,
      gender: STRING,
      hair_color: STRING,
      height: STRING,
      homeworld: STRING,
      mass: STRING,
      name: STRING,
      skin_color: STRING,
      species: STRING,
      starships: STRING,
      url: STRING,
      vehicles: STRING,

      created: DATE,
      edited: DATE,

      createdAt: DATE,
      updatedAt: DATE,
      deletedAt: DATE,
    },
    {
      sequelize,
      modelName: "people",
      timestamps: true,
      underscored: true,
      paranoid: true,
    }
  );

  return PeopleModel;
};
