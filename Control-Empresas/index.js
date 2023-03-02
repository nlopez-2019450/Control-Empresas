'use strict'

const express = require('express');
const app = express();
const { connection } = require ('./src/database/connection');
const routes = require ('./src/routes/empresa.routes')

require('dotenv').config(); //Este nos permite usar las variables de entorno
let port = process.env.PORT; //Esta es una variable de entorno

//Base de datos
connection();

//MiddleWares
app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use('/api', routes);

app.listen(port, function(){
    console.log(`El servidor está corriendo en el puerto ${port}`)
})  


