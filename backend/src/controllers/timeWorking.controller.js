const service = require("../services/timeWorking.service");

module.exports = {
  async store(req, res) {
    const { hour, status, type, employeeSocialId } = req.body;
    try {
      console.log("time_working: ", {
        hour,
        status,
        type,
        employeeSocialId,
      });
      const timeWorking = await service.store({
        hour,
        status,
        type,
        employeeSocialId,
      });
      return res.json(timeWorking);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },
  async listForEmployees(req, res) {
    const employeeSocialId = req.params.employeeSocialId;
    try {
      const timeWorkings = await service.listForEmployees(employeeSocialId);
      return res.json(timeWorkings);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },
  async listForEmployeesByMonth(req, res) {
    const employeeSocialId = req.params.employeeSocialId;
    const month = req.params.month;
    try {
      const timeWorkings = await service.listForEmployeesByMonth(
        employeeSocialId,
        month
      );
      return res.json(timeWorkings);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },
};
