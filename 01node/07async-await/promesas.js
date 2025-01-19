function ordenarProducto(producto){
    return new Promise((resolve,reject) => {
        console.log(`Ordenando: ${producto}`)
        setTimeout(() => {
            if(producto==='taza'){
                resolve(`Ordenando producto: ${producto}`)
            }else{
                reject('El producto no se encuentra')
            }
        },2000)
    });
}

function procesarPedido(respuesta){
    return new Promise (resolve => {
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: "${respuesta}"`)
        setTimeout(() => {
            resolve('Gracias por la compra')
        },4000)
    })
}

//ENCADENAMIENTO DE PROMESAS
// ordenarProducto('taza').
// then((respuesta)=>{
//     console.log('Respuesta Recibida');
//     console.log(respuesta);
//     return procesarPedido(respuesta);
// })
// .then(respuestaProcesada => {
//     console.log(respuestaProcesada)
// })
// .catch(err =>{
//     console.log(err)
// })

async function realizarPedido(producto){
    try{
        const respuesta =  await ordenarProducto(producto);
        console.log('Respuesta Recibida');
        console.log(respuesta)
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }
    catch(err){
        console.log(err)
    }
}   

realizarPedido('lapiz');