const http = require('http');

const server = http.createServer(function(request, response){
	console.log(`Petición a la URL -> ${request.url}`);
	if (request.url === "/") {
        response.write(`
            <h1>Hektor Profe</h1>
            <h3>Portada</h3>
            <p>Esto es un texto de mi portada...<p>
            <a href="/blog">Blog</a>
        `);
        response.end();
    }
    if (request.url === "/blog") {
        response.write(`
            <h1>Hektor Profe</h1>
            <h3>Blog</h3>
            <p>Esto es una noticia de mi blog...<p>
            <a href="/">Portada</a>
        `);
        response.end();
    }
});

// server.on('connection', function(socket){
// 	console.log("Nueva conexión al servidor");
// 	console.log(socket);
// })

server.listen(3000);

console.log("Servidor HTTP iniciado en el puerto 3000")

