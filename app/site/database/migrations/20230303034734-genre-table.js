'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('genre', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(25),
        allowNull: true,
      }
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('genre');
  }
};