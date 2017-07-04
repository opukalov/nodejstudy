var http = require('http');
var url = require('url');

var server = http.createServer();


server.on('request',function(req,res){
    
    var urlParsed = url.parse(req.url,true);
    debugger;
    
    if(req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message){
        res.end(urlParsed.query.message);
        return;
    }
    
    res.statusCode = 404; // Not Found
    res.end("Page not found");
})

server.listen(1337);
console.log("Server is running");

