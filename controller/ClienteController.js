const database = require('../DataBase/connection')
const { v4: uuidv4 } = require('uuid')

const ClienteController = {
    
    post: async(req, res) => {
        let {nome}= req.body
       // const id = uuidv4()

        await  database.insert({ nome}).table("clientes")
            
            res.json({message:"cliente criado com sucesso"})
    },

    getAll: async(req, res) =>{
       await database.select("*").table("clientes").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    },

    get: async(req, res) =>{
        const{id} = req.params
        await database.select("*").table("clientes").where({id:id}).then(tarefa=>{
             res.json(tarefa)
         }).catch(error=>{
             console.log(error)
         })
     },

    put: async(req, res) =>{
        const {id} = req.params
        let {nome}= req.body

        await database.where({id:id}).update({nome:nome}).table("clientes").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)

        })
    },

    delete: async(req, res) =>{
        const{id} = req.params

        await database.where({id:id}).del().table("clientes").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)

        })
    }
}

module.exports =  ClienteController