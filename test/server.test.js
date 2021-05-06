const assert=require('assert')
const axios  = require('axios')
const {crearServidor}= require('../src/server.js')
const {crearDb}=require('../src/gastosDb.js')
const { crearCliente } = require('../src/ClienteRest.js')
const {crearGasto}=require('../src/Gasto.js')
const gastoValido = {
    monto: 2000,
    detalle:'hojas A4',
    dia: 20,
    mes : 02,
    año:2019
}

const gastoValido2 = {
    monto: 10020,
    detalle:"tijeras",
    dia: 12,
    mes : 08,
    año : 2020
}

const gastoNoValido = {
    monto: -100,
    detalle:"clips",
    dia: 11,
    mes : 07,
    año : 2020
}
let db
let server
let cliente
beforeEach(async()=>{
    db=crearDb()
    server=await crearServidor(0,db)
    cliente=crearCliente('http://localhost', server.address().port ,'/api/gastos')
})

describe('getAll',()=>{
    describe('si no hay gastos',()=>{
        it('devuelve una coleccion vacía',async ()=>{
            const gastos= await cliente.getAll()
            let esperado=[]
            assert.deepStrictEqual(gastos,esperado)
        })
    })
    describe('si hay gastos',()=>{
        it('devuelve los que haya',async ()=>{
            db.add(gastoValido)
            db.add(gastoValido2)
            const gastos= await cliente.getAll()
            let esperado=[gastoValido,gastoValido2]
            assert.deepStrictEqual(gastos,esperado)
        })
    })
})

describe('Add',()=>{
    describe('Si es valido',()=>{
    it('lo agrega al dao',async ()=>{
       const gastoValidoo=crearGasto(gastoValido)
       await cliente.post(gastoValidoo)
       const gasto = await cliente.getAll()
       //console.log(gasto)
       assert.deepStrictEqual(gasto[0],gastoValido)
    })
    describe('Si es valido pero superior a 10000',()=>{
        it('lo agrega al dao y envia mail',async ()=>{
           const gastoValidoo=crearGasto(gastoValido2)
           await cliente.post(gastoValidoo)
           const gasto = await cliente.getAll()
           //console.log(gasto)
           assert.deepStrictEqual(gasto[0],gastoValido2)
        })
    describe('Si no es valido',()=>{
        it('Lanza un error',async ()=>{
            await assert.rejects(async () => {
                const gastoValidoo=crearGasto(gastoNoValido)
                await cliente.post(gastoValidoo)
            }, (error) => {
                assert.deepStrictEqual(error, new Error)
                return true
            })
            //console.log(gasto)
           })
})
    })
})
})