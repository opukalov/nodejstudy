var log = require('../logger.js')(module);
var db = require('db');

function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    log(db.getPhrase("Hello")+", "+ who.name)
}

//console.log("user.js is required!")

//exports
//exports.User = User;

module.exports = User

//global
/*global.User = User;*/

//console.log(module)