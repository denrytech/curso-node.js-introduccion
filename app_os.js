const os = require("os");

console.log("Nombre de la máquina: " + os.hostname());
console.log("Arquitectura: " + os.arch());
console.log("Plataforma: " + os.platform());
console.log(`Memoria total (Bytes): ${os.totalmem()}`);