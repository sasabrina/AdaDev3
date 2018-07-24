var express = require('express');
var router = express.Router();
var itemsController = require('../controllers/itemsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/items', itemsController.itemsList);
router.get('/items/:id', itemsController.itemId)

module.exports = router;
