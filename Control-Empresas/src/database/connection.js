const mongoose = require('mongoose');
mongoose.set('strictQuery', true );

const connection = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/ControlEmpresas')
        console.log('Conectado a la base de datos!! OwO')
    }catch(err){
        console.log(err)
        throw new Error('Error al iniciar la db');
    }
}


module.exports = { connection }