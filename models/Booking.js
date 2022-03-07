// import db mongoose 
const mongoose = require('mongoose');
const item = require('./item');
const {ObjectId} = mongoose.Schema;
// create table category
const bookingSchema = mongoose.Schema({

    bookingStartDate:{
        type: Date,
        required: true
    },
    bookingEndDate:{
        type: Date,
        require: true
    },
    itemId : [{
        _id: {
            type: ObjectId,
            ref: "Item"
        },
        price:{
            type: Number,
            require:true
        },
        night:{
            type: Number,
            require:true
        }
    }],
    memberId : [{
        type: ObjectId,
        ref: "Activity"
    }],
    bankId : [{
        type: ObjectId,
        ref: "Bank"
    }],
    proofPayment : {
        type: String,
        require:true
    },
    bankFrom : {
        type: String,
        require:true
    },
    accountHolder : {
        type: String,
        require:true
    },
    accountHolder : {
        type: String,
        require:true
    },
    status : {
        type: String,
        require:true
    },
})

module.exports = mongoose.model("Booking", bookingSchema)