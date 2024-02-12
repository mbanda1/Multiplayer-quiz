'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("gamesOrms", [

      {
        id: 30,
        players: 3,
        type: 'indoor',
        details: 'indoor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 32,
        players: 4,
        type: 'road',
        details: 'road',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}