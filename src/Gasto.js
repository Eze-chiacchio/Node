function crearGasto(objeto){
    const gasto={}
    if(objeto.monto>0 && objeto.monto){
    gasto.monto=objeto.monto
    }else{throw new Error}
    gasto.detalle=objeto.detalle
    gasto.dia=objeto.dia
    gasto.mes=objeto.mes
    gasto.año=objeto.año
    return gasto
}
module.exports={crearGasto}