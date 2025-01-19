const http = require('http');
////Crear Servidor
// const servidor = http.createServer((req,res) => {
//     res.end('Hola mundo')
// });
// servidor.listen(3000,()=>{
//     console.log("server listenin on: http://localhost:3000")
// })

// const servidor = http.createServer((req,res) => {
//    //REQUEST
//     // console.log(req)
//     // console.log(req.method)
//     // console.log(req.url)
//     // console.log(req.headers)

//     //RESPONSE
//     // console.log(res)
//     // res.statusCode=404;
//     // console.log(res.statusCode)
//     res.setHeader('content-type','application/json')
//     console.log(res.getHeaders())
//     res.end('HOLA MUNDO')
// })

// servidor.listen(3000,() => {
//     console.log(`server listening on http://localhost:${3000}`)
// })