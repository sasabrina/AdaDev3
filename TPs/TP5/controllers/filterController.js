const data= require('../controllers/dataController');
const self= {};

self.filtro= function(generos, rates){
    filtroFiltro= [];

    if(generos !== "All" && rates !== "All"){
        filtroFiltro= data.movies.filter(movie => 
            movie.genre === generos && movie.rate === rates);
    }else if(generos !== 'All' && rates === 'All'){
        filtroFiltro= data.movies.filter(movie => 
            movie.genre === generos);
    }else if(generos === 'All' && rates !== 'All'){
        filtroFiltro= data.movies.filter(movie => 
            movie.rate === rates);
    }
    return filtroFiltro;
}


self.filter= function(req, res, next){
    let generos= req.body.generos;
    let rates= req.body.rates;
    var filter= self.filtro(generos, rates);

    if(filter === 0){
        res.render('error');
    }else{
        res.render('filtered', {
            title: 'Genre '+generos+' rated '+ rates, 
            filter: filter});
    }
}
module.exports= self;