"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const { INTEGER, UUIDV4, STRING, DATE, ARRAY } = DataTypes;
  class PeopleModel extends Model {}

  PeopleModel.init(
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      uuid: UUIDV4,

      name: STRING,
      birthYear: STRING,
      eyeColor: STRING,
      gender: STRING,
      hairColor: STRING,
      height: STRING,
      homeworld: STRING,
      mass: STRING,
      skinColor: STRING,
      url: STRING,
      films: STRING,
      species: STRING,
      vehicles: STRING,
      starships: STRING,
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
