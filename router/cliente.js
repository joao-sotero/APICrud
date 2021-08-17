const connection = require('../DataBase/connection')
const express = require('express')
const router = express.Router()
const ClienteController = require('../controller/ClienteController')

router.post('/criar', ClienteController.post)
router.get('/listar',  ClienteController.getAll)
router.get('/listar/:id',  ClienteController.get)
router.put('/editar/:id',  ClienteController.put)
router.delete('/excluir/:id',  ClienteController.delete)

module.exports = router