const Model = require("../models/timeWorking.model");
const { Op } = require("sequelize");
const employeeService = require('./employee.service');
const occupationService = require('./occupation.service');

module.exports = {
  async store({ hour, status, type, employeeSocialId }) {
    try {
      // status: inAhead, late, inTime
      const timeWorking = {
        hour,
        status,
        type,
        employeeSocialId,
      };
      console.log("timeWorking: ", timeWorking);

      return await Model.create(timeWorking);
    } catch (erro) {
      console.log("erro store service timeWorking ", erro);
      return erro;
    }
  },

  async listForEmployees(employeeSocialId) {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    try {
      let employee = await employeeService.findBySocialId(employeeSocialId);
      employee = JSON.parse(JSON.stringify(employee));
      console.log('employee: ', employee)
      let occupation = await occupationService.find(employee.occupation_id);
      console.log("employee: ", employee);
      let timeWorkings = await Model.findAll({
        where: { employeeSocialId: employeeSocialId },
      });
      timeWorkings = JSON.parse(JSON.stringify(timeWorkings));
      const dates = timeWorkings
        .map((timeWorking) =>
          new Date(timeWorking.createdAt).toLocaleDateString("pt-br")
        )
        .filter(onlyUnique);

      const registers = dates.map((date) => {
        return {
          date,
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
      console.log(timeWorkings);
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

  async listForEmployeesByMonth(employeeSocialId, day) {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    try {
      let employee = await employeeService.findBySocialId(employeeSocialId);
      employee = JSON.parse(JSON.stringify(employee));
      let occupation = await occupationService.find(employee.occupation_id);
      console.log("employee: ", employee);
      let timeWorkings = await Model.findAll({
        where: { employeeSocialId: employeeSocialId },
      });
      timeWorkings = JSON.parse(JSON.stringify(timeWorkings));
      console.log("day: ", day);
      const dates = timeWorkings
        .filter((timeWorking) => {
          console.log('day: ', new Date(timeWorking.createdAt).getDate());
          return (
            new Date(timeWorking.createdAt).getDate() === parseInt(day)
          );
        })
        .map((timeWorking) =>
          new Date(timeWorking.createdAt).toLocaleDateString("pt-br")
        )
        .filter(onlyUnique);
      console.log("dates: ", dates);
      const registers = dates.map((date) => {
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
      console.log(timeWorkings);
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
