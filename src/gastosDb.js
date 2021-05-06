function crearDb(){   
const elementos=[]

    return{
        getAll:async()=>{return [...elementos]},
        add:async(elemento)=>{elementos.push(elemento)}
    }
}

module.exports={crearDb}