const db = require("../database/models");
const { Op } = require('sequelize');

module.exports = {

    home: async (req, res) => {

        let games = await db.Games.findAll({
            order: [
                ['genre', 'ASC']
            ]
        });
        let genre = await db.Genre.findAll();

        Promise.all([games, genre])
            .then(([games, genre]) => {

                return res.render('index', { games, genre })
            })
    },

    detail: async (req, res) => {

        await db.Games.findByPk(req.params.id)
            .then(result => {
                res.render('detail', { result: result });
            });

    },

    gamesGenre: async (req, res) => {

        let games;
        let genre;

        if (req.query.search) {

            games = await db.Games.findAll({
                where: {
                    [Op.or]: [
                        {
                            genre: {
                                [Op.like]: '%' + req.query.search + '%'
                            }
                        },
                        {
                            title: {
                                [Op.like]: '%' + req.query.search + '%'
                            }
                        }
                    ]

                }
            });

            genre = await db.Genre.findAll();

            Promise.all([games, genre])
                .then(([games, genre]) => {

                    return res.render('index', { games, genre })
                })

        } else {
            let offset = 0;
            let limit = 12;
            if (req.query.page) {
                offset = (req.query.page - 1) * limit;
            }
            games = await db.Games.findAndCountAll({

                order: [
                    [(req.query.order ? req.query.order : 'title'), 'ASC']
                ],
                //esto lo useré en el paginador
                limit: limit,
                offset: offset,

            })

            genre = await db.Genre.findAll();

            Promise.all([games, genre])
                .then(([games, genre]) => {
                    const game = games.rows;
                    const count = games.count;
                    const pages = Math.ceil(count / limit);
                    console.log(limit);
                    console.log(offset)
                    return res.render('index', { games: game, pages, genre });
                })
        }


    },

    id: (req, res) => {

        db.Games.findByPk(req.params.id)
            .then(games => {
                res.render('index', { gamesV: games });
            });
    }


}