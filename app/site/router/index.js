const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')


//router.get('/', controllers.home);
router.get('/detail/:id', controllers.detail)
router.get('/', controllers.gamesGenre);
//router.get('/juegos/genre/:id', controllers.id);


module.exports = router;