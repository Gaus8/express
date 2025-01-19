import http from 'http';
import movies from './movies.json' with {type:"json"};//forma de importar 
const funcion = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const { method, url } = req;
  console.log(method)
  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.end('PÁGINA CON HTTP');
          break;

        case '/hola':
          res.end('<h1 style="color:green;">HOLA MUNDO CON HTML Y HTTP</h1>');
          break;

        default:
          res.statusCode = 404;
          res.end('<h1>404 - Página no encontrada</h1>');
          break;
      }
      break;
// FORMA PARA USAR POST; QUE SE REALIZA CON EXPRESS.JSON( )
    case 'POST':
      switch (url) {
        case '/hola':
          // eslint-disable-next-line no-case-declarations
          let body = '';

          // Escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', () => {
            const data = JSON.parse(body);
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify(data));
          });
          break;

        default:
          res.statusCode = 405; // Método no permitido.
          res.end('<h1>405 - Método no permitido</h1>');
          break;
      }
  }
}
  ;

const server = http.createServer(funcion);
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
