'use strict'

const EmpresaModel = require ('../models/empresa.model');
const bcrypt = require("bcrypt");

//Crear Empresa
const createEmpresa = async(req, res)=>{
    const {name, email, password} = req.body;
    try{
        let empresa = await EmpresaModel.findOne({name});
        let empresae = await EmpresaModel.findOne({email});
        if(empresa){
            return res.status(400).send({
                ok: false, 
                message: `Una empresa ya posee este nombre`,
                name: name,
            })
        }
        if(empresae){
            return res.status(400).send({
                ok: false,
                message: `Una empresa ya posee este correo`,
                email: email
            })
        }
        empresa = new EmpresaModel(req.body);

        //Encriptación de contraseña
        const salt = bcrypt.genSaltSync();
        empresa.password = bcrypt.hashSync(password, salt);
        empresa = await empresa.save();

        res.status(200).send({
            ok: true,
            message: 'La empresa se creó satisfactoriamente'
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            ok: false,
            message: `No fue posible crear la empresa ${name}`,
        })
    }
}




module.exports = {createEmpresa}