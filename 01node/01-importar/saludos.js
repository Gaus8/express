function saludar (nombre){
    return `HOLA ${nombre}`
}

function saludarHola(){
    return 'HOLA MUNDO2!'
}

//EXPORTAR MODULOS
// module.exports.saludar = saludar;
// module.exports.saludarHola = saludarHola;

module.exports ={
    saludar: saludar,
    saludarHola: saludarHola
}