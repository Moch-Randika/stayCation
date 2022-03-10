// import db mongoose 
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;
// create table category
const itemSchema = mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        require: true
    },
    country:{
        type: String,
        default: "indonesia" // nilai default
    },
    city:{
        type: String,
        required: true
    },
    isPopular:{
        type: Boolean,
        default:false
    },
    description:{
        type: String,
        required: true
    },
    imageId : [{
        type: ObjectId,
        ref: "Images"
    }],
    featureId : [{
        type: ObjectId,
        ref: "Feature"
    }],
    activityId : [{
        type: ObjectId,
        ref: "Activity"
    }],
    categoryId : [{
        type: ObjectId,
        ref: "Categories"
    }],
})

module.exports = mongoose.model("Item", itemSchema)