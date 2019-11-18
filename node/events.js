const Logger = require('./logger');

const logger = new Logger();
logger.on('messageReceived', (arg) => {
  console.log('Message Received', arg);
});
logger.log('A message for you');


