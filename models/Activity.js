// import db mongoose 
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;
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
    itemId:[{
        type: ObjectId, //relasi item
        ref: "Item"
    }]

})

module.exports = mongoose.model("Activity", ActivitySchema)