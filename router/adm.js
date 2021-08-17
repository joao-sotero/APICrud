const connection = require('../DataBase/connection')
const express = require('express')
const router = express.Router()
const AdmController = require('../controller/AdmController')

router.post('/criar',AdmController.post)
router.get('/listar', AdmController.getAll)
router.get('/listar/:id', AdmController.get)
router.put('/editar/:id', AdmController.put)
router.delete('/excluir/:id', AdmController.delete)
module.exports = router