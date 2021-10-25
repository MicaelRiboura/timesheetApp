const { Model, DataTypes } = require('sequelize');

class Employee extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            role: DataTypes.STRING,
            start_time: DataTypes.STRING,
            finish_time: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'employee',
        })
    }
}
module.exports = Employee;