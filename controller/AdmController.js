const database = require('../DataBase/connection')
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')

const AdmController = {
    
    post: async(req, res) => {
        let {nome, email, senha}= req.body
        senha = bcrypt.hashSync(senha, 10)
       // const id = uuidv4()

        await  database.insert({ nome, email,senha}).table("adm")
            
            res.json({message:"adm criado com sucesso"})
    },

    getAll: async(req, res) =>{
       await database.select("*").table("adm").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    },

    get: async(req, res) =>{
        const{id} = req.params
        await database.select("*").table("adm").where({id:id}).then(tarefa=>{
             res.json(tarefa)
         }).catch(error=>{
             console.log(error)
         })
     },

    put: async(req, res) =>{
        const {id} = req.params
        let {nome, email, senha}= req.body

        senha = bcrypt.hashSync(senha, 10)
        await database.where({id:id}).update({nome:nome, email:email, senha:senha}).table("adm").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)

        })
    },

    delete: async(req, res) =>{
        const{id} = req.params

        await database.where({id:id}).del().table("adm").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)

        })
    }
}

module.exports =  AdmController