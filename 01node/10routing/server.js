const http = require('http');

const cursos =  require('./cursos')

const server = http.createServer((req,res) => {
    const { method } = req;
    
    switch(method){
        case 'GET':
            return manejarSolicituGet(req,res);
        break;

        case 'POST':
            return manejarSolicitudPost(req,res); 
        break;

        default:
            console.log('Metodo usado no puede ser manejado por el servidor')
    }
})

const manejarSolicituGet = (req,res) =>{
    const path = req.url;
    if(path === '/'){
     //   res.statusCode = 200;  NO ES NECESARIO COLOCARLO; PUESTO QUE ES EL VALOR POR DEFECTO
        res.end('Bienvenio a mi primer servido y API con Node.js');
    }
    else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos))
    }
    else if(path === '/cursos/programacion'){
        res.statuCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion))
    }
    else if(path === '/cursos/matematicas'){
        res.statuCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.matematicas))
    }
    else{
        res.statusCode = 404;
        res.end('Curso no existente');
    }
}

const manejarSolicitudPost = (req,res) => {
    const path = req.url;

    let body = '';

    req.on('data',contenido =>{
        body += contenido.toString()
    });

    req.on('end', () => {
        console.log(body)
        console.log(typeof body)
        body = JSON.parse(body)
        cursos.infoCursos.matematicas.push(body)
        console.log(body)
        res.end('El servidor recibio la solicitud POST para /cursos/programacion')
    })


    if(path === '/cursos/programacion'){
        res.statusCode = 200;
        res.end('El servidor recibio la solicitud para /cursos/programacion')
    }
}

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})