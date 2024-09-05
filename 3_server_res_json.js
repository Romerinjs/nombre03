const http = require('http');
const server = http.createServer((req, res) => {
//caso 4# datos del clima Json
 if (req.url === '/clima') {
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
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify({
        message:'No se encuentra la pagina solicitada',
        status: 'error'
    }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
//atajo para copiar en la terminal   node 3_server_res_json.js