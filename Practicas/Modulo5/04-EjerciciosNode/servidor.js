var http= require('http');
//agrego el modulo filseServer
var fs= require('fs');

http.createServer(function(req,res){

    //res.write(200, 'Content-type');
    fs.readFile('html/miperfil.html', function(err, data){
        //escribo el contenido del archivo en la respuesta
        res.write(200, {'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen('8080', function(){
    console.log("Escuchando en el puerto 8080");
})