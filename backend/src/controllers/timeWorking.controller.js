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
};
