module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      thumbnail: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      short_description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      game_url: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      genre: {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
      platform: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      publisher: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      developer: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      release_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      freetogame_profile_url: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      id_genre: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'genre'
          },
          Key: 'id'
        }
      }

    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games');
  }
};