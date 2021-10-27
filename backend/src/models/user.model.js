const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            socialId: DataTypes.STRING,
            name: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'user',
        })

        return this;
    }
}
module.exports = User;