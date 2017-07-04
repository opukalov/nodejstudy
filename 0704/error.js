var util = require('util');

var phrases = {
    "Hello":"Привіт",
    "World":"Світ"
}

function PhraseError(message){
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

function HttpError(status, message){
    this.message = message;
    this.status = status;
}

util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

function getPhrases(name){
    if(!phrases[name]){
        throw new Error("phrases not exists " + name);
    }else{
        return phrases[name];
    }
}

function makePage(url){
    if(url != 'index.html'){
        throw new HttpError(404, "Page not exists");
    }else{
        return util.format("%s,%s!",getPhrases("Hello1"), getPhrases("World"));
    }
}

try{
    var page = makePage('index.html');
    console.log(page);
}catch (e) {
    if(e instanceof HttpError){
        console.log(e.status,e.message);
    }else{
        console.error("Error %s\n message: %s\n stack: %s",e.name,e.message,e.stack );
    }
}
