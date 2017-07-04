var express = require('express');
var router = express.Router();
var booksModel = require('../models/Booksmodel.js');
/* GET users listing. */
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
    res.end();
  })
});
router.get('/getdetail/:id',function(req,res){
    var id = req.params.id;
    //console.log(id);
    booksModel.find({_id:req.params.id}).exec().then(function(docs){
        res.json(docs);
    })
})
module.exports = router;