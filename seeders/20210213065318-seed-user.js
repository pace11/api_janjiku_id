"use strict";

const { encryptAES } = require("../utils");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Seed to add user
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "administrator@mailinator.com",
          password: encryptAES("admin"),
          token: encryptAES("token-admin"),
        },
        {
          email: "pace@mailinator.com",
          password: encryptAES("pace"),
          token: encryptAES("token-pace"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
