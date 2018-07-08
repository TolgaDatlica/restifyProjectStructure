const config = require('../configs/config');
const rjwt = require('restify-jwt-community');
module.exports.RoutesRegister = function(server, restify){
    require('../controllers/logincontroller/route')(server, restify);
    require('../controllers/usercontroller/route')(server, restify);
    // using restify-jwt to lock down everything except /auth
    server.use(rjwt(config.jwt).unless({
        path: [/\/login\/auth/i, /\/help/i]
    }));
}