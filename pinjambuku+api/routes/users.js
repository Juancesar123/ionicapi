var express = require('express');
var router = express.Router();
var app = express();
var userModel = require('../models/usermodel');
var md5 = require('md5');
var jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log(md5('message'));
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
   userModel.findOne({email:req.body.email,password:md5(req.body.password)},function(err,docs){
      if (err) throw err;
      if (!docs) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (docs) {

      // check if password matches
      if (docs.password != md5(req.body.password)) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(docs, "peternaklele", {
         expiresIn : 60*60*24 // expires in 24 hours //bisa di set sesuai dengan kemauan kita
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
   })
})

module.exports = router;
