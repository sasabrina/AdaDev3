const self= {};
const dataController= require('../controllers/dataController');

self.filtro= function(generos, rates){
    filtroFiltro= [];

    if(generos !== "All"){
        filtroFiltro= dataController.movies.filter(genre => genre.genre === generos);
    }
    if(rates !== "All"){
        filtroFiltro= dataController.movies.filter(rate => rate.rate === rates);
    }
    return filtroFiltro;
}

module.exports= self;