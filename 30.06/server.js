var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.');


function accept(req, res) {

  if (req.url == '/vote') {
     setTimeout(function() {
      res.end('Ваш голос принят: ' + new Date());
    }, 1500);
  } else {
    file.serve(req, res); 
  }

}


if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}