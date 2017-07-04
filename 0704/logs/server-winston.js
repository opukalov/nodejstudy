var http = require('http');
var log = require('winston');

var server = new http.createServer();

server.listen(1337, '127.0.0.1');

server.on('request', require('./request-winston'));

server.listen(1337);

log.info('Server is running');