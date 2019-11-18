const EventEmitter = require('events');
const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);
    this.emit('messageReceived', {id: 1, url: url});
  }
}

module.exports = Logger;

