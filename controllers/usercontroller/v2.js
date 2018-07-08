var UserModel = require('../../models/user')
/**
 * User Controller - GetUserInfo Method .v2
 * @constructor
 * @param {string} userid - User ID.
 */
module.exports.getUserInfo = function(req, res, next){
    var user = new UserModel();
    user.Id = req.params.userid;
    user.UserName = 'johndoe';
    // user.Password = '123';
    user.IsActive = true;
    user.IsDeleted = false;
    user.LastLogin = new Date();
    user.LastUpdatetime = new Date();
    // user.RoleId = 1;
    res.send(user);
    return next();
 }