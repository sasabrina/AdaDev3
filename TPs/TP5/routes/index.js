var express = require('express');
var router = express.Router();
var indexControllers = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', indexControllers.inicio);
router.get('/movies', indexControllers.peliculas);
router.get('/movies/:id', indexControllers.movieid);
router.post('/movies/filtered', indexControllers.filter);

module.exports = router;
