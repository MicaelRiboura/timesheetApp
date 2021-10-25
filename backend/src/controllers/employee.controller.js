const Model = require('../models/employee.model');

module.exports = {
    async store (req, res) {
        const { name, role, startTime, finishTime } = req.body;
        try {
            const user = await Model.create({ name, role, start_time: startTime, finish_time: finishTime });
            return res.json(user);
            
        } catch( erro ) {
            console.log(erro);
            return;
        }

    }
}