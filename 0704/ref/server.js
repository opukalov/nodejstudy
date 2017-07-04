var http = require('http');


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

setTimeout(function(){
    server.close();
},2500);

var timer = setInterval(function(){
    console.log(process.memoryUsage());
},1000);

timer.unref();