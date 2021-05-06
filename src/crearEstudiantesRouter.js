const express = require('express');
const {crearTransporter} = require('../src/mailer.js')

const configu={
    user:'juancitoperez603@gmail.com',
    pass:'Juancito22'
}
function crearEstudiantesRouter(db) {
    const mailOptions={
        from: 'juancitoperez603@gmail.com' , // sender address
        to: "acuvapu-5272@yopmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Un usuario registro un gasto de mas de $10000", // plain text body
         }
    const router = express.Router()
    const transporter= crearTransporter(configu)
    router.get('/', async (req, res) => {
        const gastos = await db.getAll()
        res.json(gastos);
    });
    router.post('/', async (req, res) => {
        //const transporter=crearTransporter()
        await db.add(req.body);
         if(req.body.monto>10000){
            async()=>{
             transporter.enviar(mailOptions) 
         }
        }
            res.json(req.body)
    })
    return router;
}
module.exports= {crearEstudiantesRouter}
