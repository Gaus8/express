//TODOS LOS METODOS SON ASINCRONOS POR DEFECTO
//SE PUDE USAR Sync DESPUES DEL NOMRE PARA QUE SEAN SINCRONICO
const fs = require('fs')

//LEER ARCHIVOS
// fs.readFile('archivo.txt','utf-8',(err,contenido)=>{
//     if(err){
//         console.log(err)
//       //  throw err cierra la funcion y no continua la ejecucion
//     }else{
//         console.log(contenido)
//     }
// })

//RENOMBRAR ARCHIVOS
// fs.rename('archivo.txt','hola.txt',(err) =>{
//     if(err) console.log(err)
    
//     console.log('Nombre Cambiado')
// })

//AGREGAR TEXTO A UN ARCHIVO
// fs.appendFile('hola.txt', ' agregado a traves de FILE SYSTEM',(err) =>{ 
//     if(err){
//         throw err
//     }
//     console.log("ARCHIVO ACTUALIZADO")
// });

// //CREAR UN ARCHIVO NUEVO
// fs.writeFile('nuevo.txt','ARCHIVO NUEVO', (err) => {
//     if(err) throw err;
//     console.log("EXITO")
// });

//BORRAR ARCHIVO
// fs.unlink('nuevo.txt', (err) => {
//     if(err) throw err;
//     console.log('Archivo eliminado')
// })
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });