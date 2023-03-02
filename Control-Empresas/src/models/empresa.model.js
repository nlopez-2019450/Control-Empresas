'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EmpresaSchema = Schema({
    name:{
        type: String,
        require: true
    }, 
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    companyType:{
        type: String,
        require: true
    },
    branchOffices:[{
        bfName:{
            type: String
        },
        phone:{
            type: Number 
        },
        location:{
            type: Number
        }
    }]

})


module.exports = mongoose.model('empresa', EmpresaSchema)