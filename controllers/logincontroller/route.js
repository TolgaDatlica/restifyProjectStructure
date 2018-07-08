var version1 = require("./v1");
var version2 = require("./v2");

module.exports = function(server, restify){
    server.get('/login/auth/:userame/:password', restify.plugins.conditionalHandler([
        { version: '1.0.0', handler: version1.login },
        { version: '2.0.0', handler: version2.login }
      ]));
      server.get('/login/info', restify.plugins.conditionalHandler([
        { version: ['1.0.0', '2.0.0'], handler: version2.info }
      ]));
}