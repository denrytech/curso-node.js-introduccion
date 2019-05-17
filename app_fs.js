const fs = require("fs");

let files = fs.readdirSync('./');

console.log(files);

let files2 = fs.readdir('./', function(error, files){
	if( error )
		console.log(error);
	else
		console.log(files);
})