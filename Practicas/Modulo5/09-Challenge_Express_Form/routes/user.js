var express = require('express');
var router = express.Router();
var fs= require('fs');

var usuarios= [
  {nombre: "Giselle", apellido: 'Perez', telefono: '1234-5678', email: 'gise@perez.com'},
  {nombre: "Sabrina", apellido: 'Alvarez', telefono: '1234-5678', email: 'sabrina@alvarez.com'},
];
/* GET user listing. */
router.get('/', function(req, res, next) {
  let data= req.body;
  console.log(data);
  res.send('/user GET');
});

router.post('/', function(req, res, next) {
  //res.send('soy User y estoy acá para riderccionar a List, chau');
  usuarios.push(req.body);
  console.log('aca:', req.body);

  let dataTxt = JSON.stringify(usuarios);

  fs.appendFile('./public/data/usuarios.txt', dataTxt,'utf-8', function(err){
    if (err) throw err;
        console.log('Guardado')
  })
  res.redirect('user/list');
});

router.get('/list', function(req, res, next) {
  fs.readFile(usuarios, )

  res.render('userList', { title: 'Usuarios', users: usuarios });
});

router.get('/form', function(req, res, next){
  res.render('form', {title: 'Form'})
})

module.exports = router;
