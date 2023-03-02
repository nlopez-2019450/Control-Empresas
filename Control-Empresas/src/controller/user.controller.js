'Use strict'

const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');



//Crear Usuario
const createUser = async( req, res ) =>{
    const {email, password} = req.body;
    try{
        let user = await UserModel.findOne({email});
        if(user){
            return res.status(400).send({
                ok: false,
                message: `Un usuario ya posee el correo: ${email}`, 
                user: user
            });
        }

        user = new UserModel(req.body);

        //Encriptación de la contraseña
        //Arreglar encriptación
        const salt =  bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)

        //Guardar Usuario
        user = await user.save();

        //Generar Token


        res.status(200).send({
            ok: true,
            message: `El usuario fue creado correctamente`
        })


    }catch(err){
        console.log('No se pudo crear el usuario');
        throw new Error(err);
    }
}

//Listar Usuarios
const listUsers = async(req, res) =>{
    try{
        const users = await UserModel.find();
        if(!users){
            res.status(400).send({message: 'No hay usuarios disponibles'})               
        }else{
            res.status(200).send({usuarios_obtenidos: users})
        }
    }catch(err){
        console.log('No fue posiblle listar los usuarios')
        throw new Error(err)
    }
}

//Editar Usuario
const updateUser = async( req, res )=>{
    try{
        const id = req.params.id
        const userEdit = {...req.body}
        //Encriptar Contraseña
        userEdit.password = userEdit.password
            ? bcrypt.hashSync(userEdit.password, bcrypt.genSaltSync())
            : userEdit.password;
        const userComplete = await UserModel.findByIdAndUpdate(id, userEdit, {new: true})
        if(userComplete){
            return res.status(200).send({
                message: 'Usuario actualizado correctamente',
                userComplete,

            })
        }else{
            res.status(400).send({
                message: 'Este usuario no existe en llla base de datos, verificar parámetros'
            })
        }
    }catch(err){
        console.log('No fue posible actualizar el usuario')
        throw new Error(err)
    }
}

//Eliminar Usuario
const deleteUser = async( req, res) =>{
    try{
        const id = req.params.id
        const result = await UserModel.findByIdAndDelete(id);
        res.status(200).send({
            message: 'Usuario eliminardo correctamente',
            user: result
        })
    }catch(err){
        res.status(400).send({
            message: 'Error en la petición'
        })
    }
}


module.exports = {createUser, listUsers, updateUser, deleteUser}