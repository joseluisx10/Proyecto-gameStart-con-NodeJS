'use strict';

module.exports = (sequelize, DataTypes) => {

    const Games = sequelize.define('Games', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        thumbnail: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        short_description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        game_url: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        genre: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        platform: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        publisher: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        developer: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        freetogame_profile_url: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }, {
        tableName: 'games',
        timestamps: false
    });

    Games.associate = function (models) {
        Games.belongsTo(models.Genre, {
            as: "games",
            foreignKey: "id_genre"
        });
    }
    return Games;
};