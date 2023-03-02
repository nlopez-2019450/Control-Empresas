'use strict'

const express = require('express');
const {Router} = require('express')

const {createUser, listUsers, updateUser, deleteUser} = require ('../controller/user.controller');
const api = Router();

api.post('/create-user', createUser);
api.get('/list-users', listUsers);
api.put('/update-user/:id', updateUser);
api.delete('/delete-user/:id', deleteUser)




module.exports = api;   






