const axios=require('axios')
function crearCliente(urlServidor,puerto,rutaApi){
    return{
        getAll:async()=>{
            const respuesta=await axios.get(`${urlServidor}:${puerto}${rutaApi}`)
            return respuesta.data
            },
        post:async(gasto)=>{
            const objeto=await axios.post(`${urlServidor}:${puerto}${rutaApi}`,gasto)
            return objeto
        }
    }
}
module.exports={crearCliente}