const express= require ('express')
const { crearEstudiantesRouter } = require("./crearEstudiantesRouter.js")

function crearServidor(puerto,db){

    return new Promise((resolve,reject)=>{
        const app = express()
        app.use(express.json())
        const router = crearEstudiantesRouter(db)
        app.use('/api/gastos',router)
        const server=app.listen(puerto,async()=>{
            resolve(server)
        })
    })

}
module.exports={crearServidor}