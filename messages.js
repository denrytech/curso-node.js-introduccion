function hello(name) {
	console.log("Hola " + name);
}

function bye(name) {
	console.log("Adiós " + name);
}

var number = 12345;

// module.exports.hello = hello;
// module.exports.bye = bye;
// module.exports.number = number;

module.exports = {
	hello: hello,
	bye: bye,
	number : number
}