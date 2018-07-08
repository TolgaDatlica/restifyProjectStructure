module.exports = class {
    /**
     * Kullanıcı bilgilerini içeren nesnedir.
     * @param {Number} Id 
     * @param {String} UserName 
     * @param {String} Password 
     * @param {Date} LastLogin 
     * @param {Number} RoleId 
     * @param {Boolean} IsActive 
     * @param {Boolean} IsDeleted 
     * @param {Date} LastUpdatetime 
     */
    constructor(
        Id,
        UserName,
        Password,
        LastLogin,
        RoleId,
        IsActive,
        IsDeleted,
        LastUpdatetime
    ){
        this.Id = Id;
        this.UserName = UserName;
        this.Password = Password;
        this.LastLogin = LastLogin;
        this.RoleId = RoleId;
        this.IsActive = IsActive;
        this.IsDeleted = IsDeleted;
        this.LastUpdatetime = LastUpdatetime;
    }
}