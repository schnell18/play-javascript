const http = require('http');

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.write('Hello World');
            res.end();
            break;
        case '/api/courses':
            res.write(JSON.stringify([1, 2, 3, 4, 5]));
            res.end();
            break;
         default:
            res.statusCode = 404;
            res.end();
    }

});
server.on('connection', (socket) => {
    console.log("new connection...")
} )
server.listen(3000);

console.log("Click http://localhost:3000 to connect");