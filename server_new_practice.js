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
  // Redirección de /inicio-antiguo a /inicio-nuevo
  else if (req.url === '/inicio-antiguo') {
    res.writeHead(301, { 'Location': '/inicio-nuevo' });
    res.end();
  }
  // Página de destino de la redirección
  else if (req.url === '/inicio-nuevo') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(' <h1>Bienvenido a la nueva pagina de inicio.</h1> <p> En esta seccion encontraras un poco mas de contenido, que seguramente nadie lea, pero se que tu si lo haras.</p>');
  }
  // Redirección de /contacto-viejo a /contacto-nuevo
  else if (req.url === '/contacto-viejo') {
    res.writeHead(301, { 'Location': '/contacto-nuevo' });
    res.end();
  }
  // Página de destino de la redirección
  else if (req.url === '/contacto-nuevo') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Pagina de contacto actualizada. \n\n El nuevo numero es 1000000001'); //Se agregó un numero como respuesta del redireccionamiento
   
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
  //caso 3# Servidor no puede manejar la solicitud
  else if (req.url === '/acceso'){
    res.statusCode = 503;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Lo sentimos, en este momento no podemos realizar tu solicitud. \n Nuestros tecnicos estan trabajando lo antes posible. \n Esperamos verte pronto con soluciones');
  }
  //caso 4# datos del clima Json
  else if (req.url === '/clima') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      ciudad: 'Mocoa, Capital del Putumayo',
      temperatura: '24°C',
      descripcion: 'Despejado',
      humedad: '75%',
      status: 'success'
    }));
  }

  //caso 5# datos de usuario json
  else if (req.url === '/user'){
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/json');
    res.end(JSON.stringify({
        nombre: 'Romerin',
        apellido_paterno: 'Almeida',
        telefono: '3124448768',
        correo: 'romerin.javascript@gmail.com',
        status: 'success'

    }));
  }
  //Caso 5# validacion por falso en json
  else if (req.url === '/non-exist-user') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404; 
    res.end(JSON.stringify({
      message: 'El usuario no esta registrado.',
      status: 'error'
    }));
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
