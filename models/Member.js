// import db mongoose 
const mongoose = require('mongoose');

// create table category
const memberSchema = mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Member", memberSchema)