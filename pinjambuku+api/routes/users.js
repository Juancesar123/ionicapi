var express = require('express');
var router = express.Router();
var userModel = require('../models/usermodel');
var md5 = require('md5');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/',function(req,res){
  var userObject = new userModel();
  userObject.nama = req.body.nama;
  userObject.email = req.body.email;
  userObject.password = md5(req.body.password);
  userObject.save(function(docs){
    res.end();
  })
})
router.post('/login',function(req,res){
   userModel.findOne({email:req.body.email,password:md5(req.body.password)}).exec().then(function(docs){
     res.json(docs);
   })
})

module.exports = router;
