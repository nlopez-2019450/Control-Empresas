require('dotenv').config(); //Sirve para usar las variables de entorno
const database = process.env.DATABASE;

const mongoose = require('mongoose');
mongoose.set('strictQuery', true );

const connection = async() =>{
    try{
        await mongoose.connect(database)
        console.log('Conectado a la base de datos!! OwO')
    }catch(err){
        console.log(err)
        throw new Error('Error al iniciar la db');
    }
}


module.exports = { connection }