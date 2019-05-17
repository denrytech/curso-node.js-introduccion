// require('./datos');


// console.log(global.test);


// const messages = require('./messages');

// messages.hello("Denry");
// messages.bye("Denry");

// console.log(messages.number);


const { hello, bye, number } = require('./messages');

hello("Denry");
bye("Denry");

console.log(number);