const http = require('http');

const server = http.createServer(function (request, response) {
    if (request.url === "/api/divisas") {
    	// Supondremos que tenemos los datos de un fichero o base de datos
        let values = {
			"base":"EUR",
			"rates": {
				"USD":1.1199,
				"JPY":124.13,
				"GBP":0.8547
			}
		}
		
		response.write(JSON.stringify(values));
		response.end();
    }
});

server.listen(3000);