const { Model, DataTypes } = require('sequelize');

class Occupation extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            time_in: DataTypes.STRING,
            time_out: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'occupation',
        })
    }
}
module.exports = Occupation;