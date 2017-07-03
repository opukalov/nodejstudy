//exports
var log = require('./logger.js')(module);
var db = require('db');
db.connect();

var User = require('./user'); 

function run(){
    var vasya = new User('Vasia');
    var petya = new User('Petya');
    vasya.hello(petya);
    log(db.getPhrase("Run Successful"));
}
// global
/*require('./user')
var vasya = new User('Vasia');
var petya = new User('Petya');*/

if(module.parent){
    exports.run = run;
}else{
    run();
}


