'use strict'

const mongoose = require ('mongoose');
var Schema = mongoose.Schema;

const UserSchema = Schema({
    username:{
        type: String,
        require: true
    },
    password:{  
        type: String, 
        require: true
    },
    email:{
        type: String,
        require: true
    },
    rol:{
        type: String,
        require: true
    },
})

module.exports = mongoose.model('User', UserSchema);