const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNum: DataTypes.STRING
    })
    (async () => {
        await sequelize.sync({ force: true });
    })();
    return User
}

modelu.exports = UserModel;