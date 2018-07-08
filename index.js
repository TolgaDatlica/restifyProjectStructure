var restify = require('restify');
var serveStatic = require('serve-static-restify');
var routes = require('./routes/routes');
var server = restify.createServer();
// bu kod satırından önce "./node_modules/.bin/jsdoc -c ./configs/jsdocconfig.json ./controllers/*/*.js" çalıştırılmalı,
// out dizini oluşmalıdır.
server.pre(serveStatic(__dirname + '/out'));
server.get('/help', restify.plugins.serveStatic({
    directory: './out',
    file: 'index.html',
    appendRequestPath: false
}));
// Route bilgilerini kaydet
routes.RoutesRegister(server, restify);
// Hatalarda dönülecek cevaplar için
// server.on('NotFound', function (request, response, cb) { });              // When a client request is sent for a URL that does not exist, restify will emit this event. Note that restify checks for listeners on this event, and if there are none, responds with a default 404 handler. It is expected that if you listen for this event, you respond to the client.
// server.on('MethodNotAllowed', function (request, response, cb) {});      // When a client request is sent for a URL that does exist, but you have not registered a route for that HTTP verb, restify will emit this event. Note that restify checks for listeners on this event, and if there are none, responds with a default 405 handler. It is expected that if you listen for this event, you respond to the client.
// server.on('VersionNotAllowed', function (request, response, cb) {});     // When a client request is sent for a route that exists, but does not match the version(s) on those routes, restify will emit this event. Note that restify checks for listeners on this event, and if there are none, responds with a default 400 handler. It is expected that if you listen for this event, you respond to the client.
// server.on('UnsupportedMediaType', function (request, response, cb) {});  // When a client request is sent for a route that exist, but has a content-type mismatch, restify will emit this event. Note that restify checks for listeners on this event, and if there are none, responds with a default 415 handler. It is expected that if you listen for this event, you respond to the client.
// server.on('after', function (request, response, route, error) {});       // Emitted after a route has finished all the handlers you registered. You can use this to write audit logs, etc. The route parameter will be the Route object that ran.
// server.on('uncaughtException', function (request, response, route, error) {});  // Emitted when some handler throws an uncaughtException somewhere in the chain. The default behavior is to just call res.send(error), and let the built-ins in restify handle transforming, but you can override to whatever you want here.

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });