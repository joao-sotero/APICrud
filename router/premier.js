const connection = require('../DataBase/connection')
const express = require('express')
const router = express.Router()
const PremierController = require('../controller/PremierController')

router.post('/criar', PremierController.post)
router.get('/listar',  PremierController.getAll)
router.get('/listar/:id',  PremierController.get)
router.put('/editar/:id',  PremierController.put)
router.delete('/excluir/:id',  PremierController.delete)

module.exports = router