var version1 = require("./v1");
var version2 = require("./v2");

module.exports = function(server, restify){
    server.get('/user/info/:userid', restify.plugins.conditionalHandler([
        { version: '1.0.0', handler: version1.getUserInfo },
        { version: '2.0.0', handler: version2.getUserInfo }
      ]));
}