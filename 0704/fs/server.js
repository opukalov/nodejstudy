var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
    var info;
    
    if(req.url == '/'){
        
        //info = fs.readFileSync('index.htm');
        //res.end(info);
        fs.readFile('index.htm', function(err,info){
            res.end(info);
        })
    }
}).listen(3000);

