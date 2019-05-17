const path = require('path');

console.log(__filename);

let pathObj = path.parse(__filename);
console.log(pathObj.name);