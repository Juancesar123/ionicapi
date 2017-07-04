var express = require('express');
var router = express.Router();
var borrowbooksModel = require('../models/borrowbooksmodel');
router.post('/',function(req,res){
    var borrowbooksobject = new borrowbooksModel();
    borrowbooksobject.nama = req.body.nama;
    borrowbooksobject.email = req.body.email;
    borrowbooksobject.notelp = req.body.notelpon;
    borrowbooksobject.jumlah = req.body.jumlah;
    borrowbooksobject.save(function(docs){
        res.end();
    })
})
router.get('/',function(req,res){
    borrowbooksModel.find().exec().then(function(docs){
        res.json(docs);
    })
});

module.exports = router;
