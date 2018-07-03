var express = require('express');
var fileUpload = require('express-fileupload');
var router = express.Router();
const fs = require('file-system');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Intagram... ponele' });
});

router.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
router.get('/upload', function(req, res, next) {
	res.redirect('/');
})

router.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  console.log(sampleFile);

  var fileName = req.files.sampleFile.name;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname + './public/images/uploads/' + fileName, function(err) {
    
    if (err)
      
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });

});

/*router.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});*/


module.exports = router;
