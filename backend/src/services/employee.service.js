const Model = require("../models/employee.model");
const occupationService = require("./occupation.service");
const { Op } = require('sequelize');

module.exports = {
  async index() {
    try {
      let employees = await Model.findAll();
      let occupationsIds = employees.map((e) => e.occupation_id);
      employees = employees.map((e) => JSON.parse(JSON.stringify(e)));

      const occupations = await occupationService.listForEmployees(
        occupationsIds
      );

      employees.forEach((e) => {
        occupations.forEach((o) => {
          if (e.occupation_id == o.id) {
            if (e.occupation == null) e.occupation = [];
            const oParsed = JSON.parse(JSON.stringify(o));
            e.occupation = oParsed;
            delete e.occupation_id;
          }
        });
      });

      return employees;
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  async findBySocialId(socialId) {
    try {
      return Model.findOne({ where: { socialId } });
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  async find({ id }) {
    try {
      return await Model.findOne({ where: { id } });
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  async store({ name, socialId, occupation_id }) {
    try {
      return await Model.create({ name, socialId, occupation_id });
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  async update({ id, name, socialId, occupation_id }) {
    try {
      return await Model.update(
        {
          name,
          socialId,
          occupation_id,
        },
        { where: { id } }
      );
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },

  async destroy({ id }) {
    try {
      return await Model.destroy({ where: { id } });
    } catch (erro) {
      console.log(erro);
      return erro;
    }
  },
};
