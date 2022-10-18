const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : [true, 'Firstname is required']
    },
    lastname : {
        type : String,
        // required : [true, 'Lastname is required']
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        // required : true
    },
    emailverified : {
        type : Boolean,
        default : false
    }
}, {timestamps : true})

module.exports = mongoose.model('user', userSchema)