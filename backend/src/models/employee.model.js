const { Model, DataTypes } = require('sequelize');

class Employee extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            socialId: DataTypes.STRING,
            occupation_id: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'employee',
        })

        return this;
    }

    static associations(models){
        this.hasOne(models.Occupation, { foreignKey: 'occupation_id', as: 'occupation'});
    }
}
module.exports = Employee;