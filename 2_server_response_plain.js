const http = require('http');

const server = http.createServer((req, res) => {
// Redirección de /contacto-viejo a /contacto-nuevo
if (req.url === '/contacto-viejo') {
    res.writeHead(301, { 'Location': '/contacto-nuevo' });
    res.end();
  }
  // Página de destino de la redirección
  else if (req.url === '/contacto-nuevo') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Pagina de contacto actualizada. \n\n El nuevo numero es 1000000001'); //Se agregó un numero como respuesta del redireccionamiento
  }

   //caso 3# Servidor no puede manejar la solicitud
   else if (req.url === '/acceso'){
    res.statusCode = 503;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Lo sentimos, en este momento no podemos realizar tu solicitud. \n Nuestros tecnicos estan trabajando lo antes posible. \n Esperamos verte pronto con soluciones');
  }
   // Página no encontrada
   else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Viejo...¿Que pagina andas buscando? -.-)?');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
//atajo para copiar en la terminal   node 2_server_response_plain.js