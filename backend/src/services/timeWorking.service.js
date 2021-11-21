const Model = require("../models/timeWorking.model");
const { Op } = require("sequelize");

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

//   async listForEmployees(idsList) {
//     let list = [];
//     if (Array.isArray(idsList)) {
//       list = idsList;
//     } else {
//       list.push(idsList);
//     }

//     try {
//       return await Model.findAll({ where: { id: { [Op.in]: list } } });
//     } catch (erro) {
//       console.log(erro);
//       return erro;
//     }
//   },
};
