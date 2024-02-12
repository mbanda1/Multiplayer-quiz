'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gamesOrm', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      players: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING(36),
        validate: {
          isIn: [['indoor', 'field', 'road']]
        }
      },
      details: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },  {
      tableName: 'gamesOrm' // Explicitly specify the table name
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('gamesOrm');
  }
};