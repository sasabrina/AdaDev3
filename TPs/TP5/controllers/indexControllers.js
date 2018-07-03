const dataController= require('../controllers/dataController');
const filterController= require('../controllers/filterController');
const self= {};

self.inicio= function(req, res, next) {
    res.render('index', { title: 'CineFan' });
  }

self.peliculas= function(req, res, next){
    res.render('movies', {
        title: 'CineFan', 
        movie: dataController.movies, 
        genre: dataController.genres,
        rate: dataController.rates
    });
}

self.movieid= function(req, res, next){
    let movie= dataController.movies.find(movie=> movie.id === req.params.id)
    res.render('moviedetails', { title: 'CineFan', movie: movie});  
}

self.filter= function(req, res, next){
    let generos= req.body.generos;
    let rates= req.body.rates;
    var filter= filterController.filtro(generos, rates);

    if(filter === 0){
        res.render('error');
    }else{
        res.render('filtered', {title: 'Genre '+generos+' rated '+ rates, filter: filter});
    }
}

module.exports= self;