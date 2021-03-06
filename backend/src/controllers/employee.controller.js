const service = require("../services/employee.service");

module.exports = {
  async index(_req, res) {
    try {
      const employee = await service.index();
      return res.json(employee);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },

  async find(req, res) {
    try {
      const { id } = req.params;
      const employee = await service.find({ id });
      return res.json(employee);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },

  async findBySocialId(req, res) {
    try {
      const { socialId } = req.params;
      const employee = await service.findBySocialId(socialId);
      return res.json(employee);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },

  async store(req, res) {
    const { name, socialId, occupation_id } = req.body;
    try {
      const employee = await service.store({ name, socialId, occupation_id });
      return res.json(employee);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, socialId, occupation_id } = req.body;
    try {
      const employee = await service.update({
        id,
        name,
        socialId,
        occupation_id,
      });
      return res.json(employee);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const employee = await service.destroy({ id });
      return res.json(employee);
    } catch (erro) {
      return res.send({ errorMessage: erro });
    }
  },
};
