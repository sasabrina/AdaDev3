const data = require('../controllers/dataController');
const self = {};

var vistas= [];



self.createWatched= function(watched){
    var movieWatched= vistas.indexOf(watched);
    if(movieWatched >= 0){
        vistas.splice(movieWatched, 1);
    }else{
        vistas.push(watched)
    }

    for(i=0; i<data.movies.length; i++){
        data.movies[i].watched = false;
    }

    for(i=0; i<vistas.length; i++){
        for(j=0; j<data.movies.length; j++){
            if(data.movies[j].poster === vistas[i]){
                data.movies[j].watched= true;
            }
        }
    }
}

self.getWatched= function(req, res, next){
    var watched= (JSON.parse(req.body.info)).watched;
    self.createWatched(watched);
    res.send("se recibió la respuesta");
}

self.watched= function(req, res, next){
    var movietitle;
    var movieid;
    for(i=0; i<vistas.length; i++){
        for(j=0; j<data.movies.length; j++){
            if(data.movies[j].poster === vistas[i]){
                movieid= data.movies[j].id;
                movititle= data.movies[j].movietitle;
            }
        }
    }
    res.render('watched', {
        title: 'CineFan',
        title2: 'Movies watched:',
        vistas,
        movieid,
        movietitle,
    });
}

module.exports= self;