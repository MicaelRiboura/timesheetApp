const { Sequelize, Model, DataTypes, INTEGER } = require('sequelize');

class Employee extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            role: DataTypes.STRING,
            occupation_id: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'employee',
        })
    }

    static associations(models){
        this.hasOne(models.Occupation, { foreignKey: 'occupation_id', as: 'occupation'});
    }
}
module.exports = Employee;