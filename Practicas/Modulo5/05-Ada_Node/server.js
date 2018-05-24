var express= require ('express');
var app= express ();

app.get('/', function(req, res){  //'/' url, ruta raíz
    res.send("Hello World");
});

app.get('/prueba', function(req, res){
    res.send("Hello World desde /prueba");
});

app.use('/customer', require('./customer.js'))

app.listen (3000, function(){
    console.log('a la escucha en el puerto 3000');
});