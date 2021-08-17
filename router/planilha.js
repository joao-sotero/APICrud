const connection = require('../DataBase/connection')
const express = require('express')
const router = express.Router()
const PlanilhaController = require('../controller/PlanilhaController')

router.post('/criar',PlanilhaController.criarPLanilha)
router.get('/listar', PlanilhaController.getPlanilha)
router.get('/listar/:id', PlanilhaController.getPlanilhaPorId)
router.delete('/excluir/:id', PlanilhaController.deletePlanilha)
router.put('/editar/:id', PlanilhaController.putPlanilha)


module.exports = router