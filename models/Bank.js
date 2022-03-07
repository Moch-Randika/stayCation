// import db mongoose 
const mongoose = require('mongoose');

// create table category
const bankSchema = mongoose.Schema({

    nameBank:{
        type: String,
        required: true
    },
    nomorRekening:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Bank", bankSchema)