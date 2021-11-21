const service = require("../services/timeWorking.service");

module.exports = {
  async store(req, res) {
    const { hour, status, type, employee_id } = req.body;
    try {
      console.log("time_working: ", {
        hour,
        status,
        type,
        employee_id,
      });
      const timeWorking = await service.store({
        hour,
        status,
        type,
        employee_id,
      });
      return res.json(timeWorking);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },
  async listForEmployees(req, res) {
    const employeeId = req.params.employeeId;
    try {
      const timeWorkings = await service.listForEmployees(employeeId);
      return res.json(timeWorkings);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },
};
