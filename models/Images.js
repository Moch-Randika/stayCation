// import db mongoose 
const mongoose = require('mongoose');

// create table category
const imageSchema = mongoose.Schema({

    imageUrl:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Images", imageSchema)