const config = require('../../configs/config');
const jwt = require('jsonwebtoken');
/**
 * Login Controller - Auth Method .v2
 * @constructor
 * @param {string} username - User Name.
 * @param {string} password - Password.
 */
module.exports.login = function(req, res, next){
    var data = {
        username: req.params.username,
        password: req.params.password
    };
    // Create token for user access
    let token = jwt.sign(data, config.jwt.secret
    // Time for token expire
    // , {
    //     expiresIn: '1m'
    // }
    );
    let {iat, exp} = jwt.decode(token);
    res.send("login process v2... " + req.params.name + " " + iat + " " + exp + " " + token);
    return next();
 }
 /**
 * Login Controller - Info method .v1 - .2
 * @constructor
 */
 module.exports.info = function(req, res, next){
    res.send("same function for v1 and v2 ");
    return next();
 }