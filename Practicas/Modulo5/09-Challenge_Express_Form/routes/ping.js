var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ping', { title: 'Pong' });
  //sin view: 
  //res.send('Pong')
});

module.exports = router;