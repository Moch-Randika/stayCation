// import db mongoose 
const mongoose = require('mongoose');

// create table category
const ActivitySchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    isPopular:{
        type: Boolean,
    },

})

module.exports = mongoose.model("Activity", ActivitySchema)