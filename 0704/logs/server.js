var http = require('http');
var debug = require('debug')('server');

var server = new http.createServer();

server.listen(1337, '127.0.0.1');

server.on('request', require('./request'));

server.listen(1337);

debug('Server is running');