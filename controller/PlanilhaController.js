const database = require('../DataBase/connection')
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')

const PlanilhaController = {
    
    criarPLanilha: async(req, res)=>{
        let{computer_name, vm_azure, ip, environment, functionality, system_operation, new_window_time, sunday,
             monday, tuesday, wednesday, thursday, friday, saturday, start_mode, stop_mode, request, update_by,
              automation, cliente_id } = req.body
        
             await  database.insert({computer_name, vm_azure, ip, environment, functionality, system_operation, new_window_time, sunday,
                monday, tuesday, wednesday, thursday, friday, saturday, start_mode, stop_mode, request, update_by, 
                 automation, cliente_id}).table("planilha")
            
             res.json({message:"Planilha criado com sucesso"})     

    },

    getPlanilha: async(req, res)=>{
        await database.select("*").table("planilha").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    },

    getPlanilhaPorId: async(req, res) =>{
        const {id} = req.params
        await database.select("*").table("planilha").where({id:id}).then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    },

    deletePlanilha: async(req, res)=>{
        const{id} = req.params
        await database.where({id:id}).del().table("planilha").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)

        })
    },

    putPlanilha: async(req, res)=>{
        const {id} = req.params
        let {computer_name, vm_azure, ip, environment, functionality, system_operation, new_window_time, sunday,
            monday, tuesday, wednesday, thursday, friday, saturday, start_mode, stop_mode, request, update_by, 
            automation, cliente_id } = req.body

        await database.where({id:id}).update({computer_name:computer_name, vm_azure:vm_azure, ip:ip, environment:environment,
             functionality:functionality, system_operation:system_operation, new_window_time:new_window_time, sunday:sunday,
            monday:monday, tuesday:tuesday, wednesday:wednesday, thursday:thursday, friday:friday, saturday:saturday, start_mode:start_mode,
             stop_mode:stop_mode, request:request, update_by:update_by, automation:automation, cliente_id:cliente_id }).table("planilha").then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)

        })

        
    }
}

module.exports =  PlanilhaController