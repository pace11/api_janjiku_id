'use strict'

const { encryptAES } = require('../utils')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'janjiku2021@gmail.com',
          password: encryptAES('Pace1996'),
          token: encryptAES('janjiku2021'),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('users', null, {});
  },
}
