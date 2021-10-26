const {Model, DataTypes} = require('sequelize');
class Employee extends Model {
    static init(sequelize) {
        super.init({
            name: {type: DataTypes.STRING, field: 'name' },
            cpf: {type: DataTypes.STRING, field: 'cpf'},
            role: {type: DataTypes.STRING, field: 'role'},
            startTime: {type: DataTypes.STRING, field: 'start_time' },
            finishTime: {type: DataTypes.STRING, field: 'finish_time' },
        }, {
            sequelize,
            tableName: 'employee',
        })

        return this;
    }
}
module.exports = Employee;