const http = require('http');
//creación del servidor
console.log("Hola mundo"); //ejemplo para seguir el tutorial xd
const server = http.createServer((req, res) => { //req, peticiones (cliente -> servidor). res, es la respuesta

    res.statusCode = 200; //la respuesta de nuestro server va a ser exitosa (es una respuesta manejada por backend, que significa exitosa)
    res.setHeader('Content-Type', 'text/plain'); //el contenido de la peticion va a ser de tipo texto/plano
    res.end('<h1> Hola, Mundo! </h1> \nun saludo mi gente bella, picos en el corta bollos'); //Enviar la respuesta.
});

//Asignacion de puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
    server.listen(port,() => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);  



    });