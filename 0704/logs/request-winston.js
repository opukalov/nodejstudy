var url = require('url');
var log = require('winston');

module.exports = function (req,res){
    
    var urlParsed = url.parse(req.url,true);
    
    log.info("Got request",req.method, req.url)
    
    if(req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message){
        var message = urlParsed.query.message;
        log.debug("Echo: "+message)
        res.end(message);
        return;
    }
    
    log.error("Unknown URL");
    
    res.statusCode = 404; // Not Found
    res.end("Page not found");
    
}