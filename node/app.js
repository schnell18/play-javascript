const logger = require('./logger');

console.log(logger);
// logger.log('A message');
logger('A message');
function sayHello(name) {
  console.log("Hello " + name);

}

// setInterval(() => sayHello('mosh'), 1000);
