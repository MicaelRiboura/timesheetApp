const Model = require("../models/occupation.model");
const { Op } = require("sequelize");

module.exports = {
  async index() {
    try {
      return await Model.findAll();
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  async store({ name, time_in, time_out }) {
    try {
      return await Model.create({ name, time_in, time_out });
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  async listForEmployees(idsList) {
    let list = [];
    if (Array.isArray(idsList)) {
      list = idsList;
    } else {
      list.push(idsList);
    }

    try {
      return await Model.findAll({ where: { id: { [Op.in]: list } } });
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
};
