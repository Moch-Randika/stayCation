// import db mongoose 
const mongoose = require('mongoose');

// create table category
const categorySchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Category", categorySchema)