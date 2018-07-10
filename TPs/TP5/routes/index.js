var express = require('express');
var router = express.Router();
var data = require('../controllers/dataController'); 
var movies = require('../controllers/moviesController');
var search = require('../controllers/searchController');
var filter = require('../controllers/filterController');
var watched = require('../controllers/watchedController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'CineFan', 
    movie: data.movies});
});

router.get('/movies/:page', movies.movies);
router.get('/movies/m/:id', movies.movieid);
router.get('/search/:search', search.search);
router.post('/movies/filtered', filter.filter);
router.post('/movies/vistas', watched.getWatched);
router.get('/movies/v/watched', watched.watched);

module.exports = router;
