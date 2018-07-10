const data = require('../controllers/dataController');
const self = {};

self.movies = function(req, res, next){
    let page;
    if (req.params.page){
        page = req.params.page;
    }else{
        page = 1;
    }

    let perPage = 6;
    let pages = Math.ceil(data.movies.length / perPage);
    let skipPage = (page -1) * perPage;
    let moviesArr = [];

    for (var i = skipPage; i < skipPage + perPage; i++) {
		if (data.movies[i]) {
		  moviesArr.push(data.movies[i]);
		}
	}
	if(moviesArr.length == 0) {
		res.render("error");
    }
    
    res.render('movies', {
        title: 'CineFan',
        totalPages: pages,
        currentPage: req.params.page,
        movies: moviesArr,
        genre: data.genres,
        rate: data.rates,
    });
}

self.movieid= function(req, res, next){
    let movie= data.movies.find(movie=> movie.id === req.params.id)
    res.render('moviedetails', { title: 'CineFan', movie: movie});  
}

module.exports= self;