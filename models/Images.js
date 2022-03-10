// import db mongoose 
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;
// create table category
const imageSchema = mongoose.Schema({

    imageUrl:{
        type: String,
        required: true
    },
    itemId:[{
        type: ObjectId, //relasi item
        ref: "Item"
    }]

})

module.exports = mongoose.model("Images", imageSchema)