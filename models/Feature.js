// import db mongoose 
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;
// create table category
const featureSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    itemId:[{
        type: ObjectId, //relasi item
        ref: "Item"
    }]

})

module.exports = mongoose.model("Feature", featureSchema)