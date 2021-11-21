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

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    try {
      let employee = await employeeService.find({ id: employeeId });
      employee = JSON.parse(JSON.stringify(employee));
      let occupation = await occupationService.find(employee.occupation_id);
      console.log('employee: ', employee);
      let timeWorkings = await Model.findAll({ where: {employee_id: employeeId }});
      timeWorkings = JSON.parse(JSON.stringify(timeWorkings));
      const dates = timeWorkings
        .map((timeWorking) =>
          new Date(timeWorking.createdAt).toLocaleDateString("pt-br")
        )
        .filter(onlyUnique);

      const registers = dates.map(date => {
        return {
          date,
          registers: timeWorkings.filter(timeWorking => {
            if(new Date(timeWorking.createdAt).toLocaleDateString("pt-br") === date)
            return true;
            else
            return false;
          })
        }
      })
      console.log(timeWorkings)
      delete employee.occupation_id;
      return {
        ...employee,
        occupation,
        timeWorkings: registers,
      };
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
  
  async listForEmployeesByMonth(employeeId, month) {

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    try {
      let employee = await employeeService.find({ id: employeeId });
      employee = JSON.parse(JSON.stringify(employee));
      let occupation = await occupationService.find(employee.occupation_id);
      console.log('employee: ', employee);
      let timeWorkings = await Model.findAll({ where: {employee_id: employeeId }});
      timeWorkings = JSON.parse(JSON.stringify(timeWorkings));
      console.log('month: ', month)
      const dates = timeWorkings
        .filter(timeWorking => {
          console.log(new Date(timeWorking.createdAt).getMonth() + 1);
          return (new Date(timeWorking.createdAt).getMonth() + 1) === parseInt(month)
        })
        .map((timeWorking) =>
          new Date(timeWorking.createdAt).toLocaleDateString("pt-br")
        )
        .filter(onlyUnique);
      console.log('dates: ', dates)
      const registers = dates
        .map((date) => {
          return {
            date: date,
            registers: timeWorkings.filter((timeWorking) => {
              if (
                new Date(timeWorking.createdAt).toLocaleDateString("pt-br") ===
                date
              )
                return true;
              else return false;
            }),
          };
        });
      console.log(timeWorkings)
      delete employee.occupation_id;
      return {
        ...employee,
        occupation,
        timeWorkings: registers,
      };
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
};
