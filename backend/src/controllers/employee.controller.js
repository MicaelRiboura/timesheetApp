const service = require('../services/employee.service');

module.exports = {
    async store (req, res) {
        const { name, cpf, role, startTime, finishTime } = req.body;
        try {
            const user = await service.create({ name, cpf, role, startTime, finishTime });
            return res.status(201).json(user);
            
        } catch( error ) {
            return res.status(400).send({customMessage: error});
        }

    }
}