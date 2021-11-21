const Model = require("../models/timeWorking.model");
const { Op } = require("sequelize");
const employeeService = require('./employee.service');
const occupationService = require('./occupation.service');

module.exports = {
  async store({ hour, status, type, employee_id }) {
    try {
        // status: inAhead, late, inTime
        const timeWorking = {
        hour,
        status,
        type,
        employee_id,
      };
      console.log('timeWorking: ', timeWorking);

      return await Model.create(timeWorking);
    } catch (erro) {
      console.log('erro store service timeWorking ', erro);
      return erro;
    }
  },

  async listForEmployees(employeeId) {

    try {
      let employee = await employeeService.find({ id: employeeId });
      employee = JSON.parse(JSON.stringify(employee));
      let occupation = await occupationService.find(employee.occupation_id);
      occupation = JSON.parse(JSON.stringify(occupation));
      console.log('employee: ', employee);
      const timeWorkings = await Model.findAll({ where: {employee_id: employeeId }});
      delete employee.occupation_id;
      return {
        ...employee,
        occupation,
        timeWorkings
      }
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
};
