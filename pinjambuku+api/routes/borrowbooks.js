var express = require('express');
var router = express.Router();
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
