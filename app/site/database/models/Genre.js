'use strict';
module.exports = (sequelize, DataTypes) => {

    const Genre = sequelize.define('Genre', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(25),
            allowNull: true
        }
    }, {
        tableName: 'genre',
        timestamps: false
    });

    Genre.associate = function (models) {
        Genre.hasMany(models.Games, {
            as: "games",
            foreignKey: "id_genre"
        });
    }

    return Genre;
};