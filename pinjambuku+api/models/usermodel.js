var mongoose = require("mongoose");
module.exports =  mongoose.model('Users', {
        email : {type : String, default: ''},
        password : {type : String, default: ''},
        nama : {type : String, default: ''},
})