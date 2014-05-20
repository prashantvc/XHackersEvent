// var http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('Hello world');
// }).listen(3000, '127.0.0.1');
// console.log('Server running at http://127.0.0.1');

var express = require('express'),
    path = require('path'),
    http = require('http');

var app = express();

app.configure(funtion () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'piblic')));
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
