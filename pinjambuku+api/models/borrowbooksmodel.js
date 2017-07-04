var mongoose = require("mongoose");
module.exports =  mongoose.model('Borrowbooks', {
        namabuku : {type : String, default: ''},
        penerbit : {type : String, default: ''},
        namapenulis : {type : String, default: ''},
        tahunterbit : {type : String, default: ''},
        kodebuku : {type : String, default: ''},
        jumlah : {type : String, default: ''},
        nama : {type : String, default: ''},
        notelp : {type : String, default: ''},
        email : {type : String, default: ''},
        tanggaldikembalikan : {type : Date},
        created_at : {type : Date, default: Date.now()},
});