const http = require('http');

const server = http.createServer((req, res) => {
// Redirección de /inicio-antiguo a /inicio-nuevo
if (req.url === '/inicio-antiguo') {
  res.writeHead(301, { 'Location': '/inicio-nuevo' });
  res.end();
}

// Página de destino de la redirección
else if (req.url === '/inicio-nuevo') {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(' <h1>Bienvenido a la nueva pagina de inicio.</h1> <p> En esta seccion encontraras un poco mas de contenido, que seguramente nadie lea, pero se que tu si lo haras.</p>');
}

// caso 1# Redirección a un html con imagen de Agustín Calderón seguida de un texto sarcastico
else if (req.url === '/donpollo') {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  res.end("<h1>Te metiste al lugar equivocado</h1> <br> <p>Nunca debiste usar esa URL, amigo. Ahora este hombre te va a cazar. Si lo ves, no intentes huir, para cuando lo pienses ya te habran pelado.</p> <img src='https://i.redd.it/n4tjb73dmuab1.jpg' alt='Imagen de advertencia' /> ");
}

//caso 2# Autenticacion necesaria fallida o no reconocida
else if (req.url === '/admin') {
  res.statusCode = 401;
  res.setHeader('Content-Type', 'text/html');
  res.end("<h1>Usted no es un usuario autorizado para realizar esta operacion</h1> <p>Has intentado acceder a una seccion restringida del sistema sin los permisos necesarios. Este incidente sera registrado. Si crees que esto es un error, por favor, contacta al administrador.</p> <p>Advertencia: Cualquier intento de acceso no autorizado puede resultar en la suspension de tu cuenta o en acciones legales segun las politicas de uso y las leyes aplicables.</p> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibnqjfaFml1hTKB_GN8E6d5TcpCgv-GHkUw&s' alt='Imagen de advertencia' /> ");
}
 // Página no encontrada
 else {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.end(' <h1>Creo que no entiendo tu solicitud -.-)? </h1>');
}
}
);

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
//atajo para copiar en la terminal   node 1_server_response_redirect_html.js