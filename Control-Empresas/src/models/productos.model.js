'use strict'

const mongoose = require(mongoose)
const Schema = mongoose.Schema;

const ProductosSchema = Schema({
    name:{
        type: String,
        require: true
    },
    precio:{   
        type: Number,
        require: true
    },
    stock:{
        type: Number,
        require: true
    },
    categoria:{
        type: String, 
        require: true
    }
})


module.exports = mongoose('Productos', ProductosSchema);