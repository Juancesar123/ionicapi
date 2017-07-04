var mongoose = require("mongoose");
module.exports =  mongoose.model('Books', {
        namabuku : {type : String, default: ''},
        penerbit : {type : String, default: ''},
        namapenulis : {type : String, default: ''},
        tahunterbit : {type : String, default: ''},
        kodebuku : {type : String, default: ''},
        stok : {type : String, default: ''},
        deskripsisingkat : {type : String, default: ''},
        status : {type : String, default: 'Ready'},
        created_at : {type : Date, default: Date.now()},
});