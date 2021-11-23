const { Model, DataTypes } = require("sequelize");

class TimeWorking extends Model {
  static init(sequelize) {
    super.init(
      {
        hour: DataTypes.STRING,
        status: DataTypes.STRING,
        type: DataTypes.STRING,
        employeeSocialId: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "time_working",
      }
    );
    return this;
  }

  static associations(models) {
    this.hasOne(models.Employee, {
      foreignKey: "employee_id",
      as: "employee",
    });
  }
}
module.exports = TimeWorking;
