'use strict'

const express = require('express');
const {Router} = require('express')

const {createEmpresa} = require('../controller/empresa.controller')
const api = Router();

api.post("/create-empresa", createEmpresa);



module.exports = api;   






