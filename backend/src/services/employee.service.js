const Model = require('../models/employee.model');

module.exports.create = async ({name, cpf, role, startTime, finishTime}) => {
    try {
        return await Model.create({ name, cpf, role, startTime, finishTime });
    } catch( error ) {
        return error;
    }
}