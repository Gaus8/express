const evaluarPromesa = true;

const promesa = new Promise((resolve, reject) => {
   setTimeout(() =>{
    if(evaluarPromesa){
        resolve('Promesa Cumplida')
    }else{
        reject('Promesa rechazada :(')
    }
   },3000)
})

////FORMA DE RESOLVER PROMESAS
// promesa.then((resolver) => {
//     console.log(resolver)
// })

const resolverPromesa = (valor) =>{
    console.log(valor)
}

const rechazarPromesa = (motivoRechazo) =>{
    console.log(motivoRechazo)
}

promesa.then(resolverPromesa,rechazarPromesa);