const estadoPedido = () =>{
   return  Math.random() < 0.8;
}

const miPedidoPizza = new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(estadoPedido()){
            resolve('Pedido Exitoso. Pedido en camino');
        }
        else{
            reject('Ocurrio un error durante la solicitud');
        }
    },1000)
});

miPedidoPizza.
then((mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
}).catch((mensajeError) => {
    console.log(mensajeError);
})




// const resolverPromesas = (valor) => {
//     console.log(valor)
// }

// const rechazarPromesas = (valorRechazo) => {
//     console.log(valorRechazo)
// }

// miPedidoPizza.then(resolverPromesas,rechazarPromesas)

// // console.log(estadoPedido())
// // for(let i = 0;i < 10;i++){
// //     console.log(estadoPedido())
// // }

