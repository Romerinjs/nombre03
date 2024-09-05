const http = require('http');

const server = http.createServer((req, res) => {
  // Redirección de /old-page a /new-page
  if (req.url === '/old-page') {
    res.writeHead(301, { 'Location': '/new-page' });
    res.end();
  }
  else if(req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Usa las url \n /new-page,\n /inicio-nuevo,\n /Inicio-antiguo,\n /old-page,\n /contacto-nuevo,\n /contacto-viejo,\n /donpollo,\n /admin,\n /acceso,\n /user,\n /clima,\n /non-exist-user')
  }
  // Página de destino de la redirección
  else if (req.url === '/new-page') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Esta es la nueva pagina.');
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
