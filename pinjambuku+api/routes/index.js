var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/bookinsert',function(req,res,next){
  res.render('books');
})
router.get('/viewborrowbooks',function(req,res,next){
  res.render('borrowbooks');
})
module.exports = router;
