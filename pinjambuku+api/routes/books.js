var express = require('express');
var router = express.Router();
var booksModel = require('../models/Booksmodel.js');
var app = express();
/* GET users listing. */

var jwt = require('jsonwebtoken');
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, "peternaklele", function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});
router.get('/', function(req, res, next) {
  booksModel.find().exec().then(function(docs){
      res.json(docs);
  })
});
router.post('/',function(req,res){
  var booksObject = new booksModel();
  booksObject.namabuku = req.body.namabuku;
  booksObject.penerbit = req.body.penerbit;
  booksObject.namapenulis = req.body.penulis;
  booksObject.tahunterbit = req.body.tahunterbit;
  booksObject.kodebuku = req.body.kode;
  booksObject.stok = req.body.stok;
  booksObject.deskripsisingkat = req.body.deskripsisingkat; 
  booksObject.save(function(docs){
    res.json({"message":"data saved successfully"});
    res.end();
  })
});
router.delete('/:id',function(req,res){
  booksModel.remove({"_id":req.params.id}).then(function(err,docs){
    res.json({"message":"data deleted successfully"});
  }).then(function(err){
    res.json(err);
  })
});
router.put('/',function(req,res){
    booksModel.update({
       _id: req.body.id
      }, 
      { 
        $set: { 
          namabuku: req.body.namabuku ,
          penerbit:req.body.penerbit,
          namapenulis:req.body.namapenulis,
          tahunterbit:req.body.tahunterbit,
          kodebuku:req.body.kodebuku,
          stok:req.body.stok,
          deskripsisingkat:req.body.deskripsisingkat
        }}).then(function(){
          res.json({"message":"data updated suksesfully"});
      });
})
router.get('/getdetail/:id',function(req,res){
    var id = req.params.id;
    //console.log(id);
    booksModel.find({_id:req.params.id}).exec().then(function(docs){
        res.json(docs);
    })
})
module.exports = router;