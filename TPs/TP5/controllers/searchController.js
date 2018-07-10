const data= require('../controllers/dataController');
const self= {};

function match(words, movie){
    const movieString = JSON.stringify(movie).toLowerCase();
    console.log(movieString)
    return words.every(word => movieString.indexOf(word) >= 0 );
}

self.search= function(req, res, next){
    let inputSearch= req.params.search;
    let searchWords= inputSearch.split(" ");
    let dataMovie= data.movies.filter(item => match(searchWords, item));

    if(dataMovie.length){
        res.render('search',{
            title: 'CineFan',
            title2: 'Matches found for '+inputSearch, 
            dataMovie: dataMovie});
    }else{
        res.render('error', {
            message: 'No matches found for '+inputSearch});
    }
}

module.exports= self;