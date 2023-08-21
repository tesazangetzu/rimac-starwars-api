"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("people", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      uuid: Sequelize.UUID,

      birth_year: Sequelize.STRING,
      eye_color: Sequelize.STRING,
      films: Sequelize.STRING,
      gender: Sequelize.STRING,
      hair_color: Sequelize.STRING,
      height: Sequelize.STRING,
      homeworld: Sequelize.STRING,
      mass: Sequelize.STRING,
      name: Sequelize.STRING,
      skin_color: Sequelize.STRING,
      species: Sequelize.STRING,
      starships: Sequelize.STRING,
      url: Sequelize.STRING,
      vehicles: Sequelize.STRING,

      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      edited: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NULL ON UPDATE CURRENT_TIMESTAMP"),
      },
      deleted_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("people");
  },
};
