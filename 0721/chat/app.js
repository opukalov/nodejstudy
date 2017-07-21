var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./lib/log')(module);
var mongoose = require('./lib/mongoose');
var HttpError = require('./error').HttpError;
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var errorHandler = require('express-error-handler');

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

//app.use(express.favicon());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

if (app.get('env') == 'development') {
  //app.use(express.logger('dev'));
  app.use(logger('dev'));
} else {
  //app.use(express.logger('default'));
  app.use(logger('default'));
}



//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));   

//app.use(express.cookieParser());
app.use(cookieParser());

var sessionStore = require('./lib/sessionStore');

app.use(session({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: sessionStore
}));

app.use(require('./middleware/sendHttpError'));
app.use(require('./middleware/loadUser'));

//app.use(app.router);

var checkAuth = require('./middleware/checkAuth');

app.get('/', require('./routes/frontpage').get);

app.get('/login', require('./routes/login').get);
app.post('/login', 
require('./routes/login').post

/*function (req, res) {
    console.log(req.body.username)
}*/

//require('./routes/login').post


);

app.post('/logout', require('./routes/logout').post);

app.get('/chat', checkAuth, require('./routes/chat').get);

//require('./routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
  if (typeof err == 'number') {
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') == 'development') {
        
      //express.errorHandler()(err, req, res, next);
      app.use(errorHandler(err, req, res, next));
      
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});

var server = http.createServer(app);
server.listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

var io = require('./socket')(server);
app.set('io', io);