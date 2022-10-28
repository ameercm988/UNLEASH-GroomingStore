const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    servicetype : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
}, {timestamps : true} )

module.exports = mongoose.model('service', serviceSchema)