const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            socialId: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'user',
        })

        return this;
    }
}
module.exports = User;