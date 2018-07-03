const self= {};
const dataController= require('../controllers/dataController');

self.filtro= function(generos){
    filtroFiltro= [];

    if(generos !== "All"){
        filtroFiltro= dataController.movies.filter(item => item.genre === generos);
    }
    return filtroFiltro;
}

module.exports= self;