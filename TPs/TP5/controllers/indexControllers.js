const dataController= require('../controllers/dataController');
const filterController= require('../controllers/filterController');
const self= {};

const genres= ["All","Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Music", "Romance", "Science Fiction", "Thriller", "Mystery", "Fantasy"];

self.inicio= function(req, res, next) {
    res.render('index', { title: 'CineFan' });
  }

self.peliculas= function(req, res, next){
    res.render('movies', {title: 'CineFan', movie: dataController.movies, genre: genres});
}

self.movieid= function(req, res, next){
    let movie= dataController.movies.find(movie=> movie.id === req.params.id)
    res.render('moviedetails', { title: 'CineFan', movie: movie});  
}

self.filter= function(req, res, next){
    let generos= req.body.generos;
    var genreFilter= filterController.filtro(generos);

    if(genreFilter === 0){
        res.render('error');
    }else{
        res.render('filtered', {title: generos, genreFilter: genreFilter});
    }
}

module.exports= self;