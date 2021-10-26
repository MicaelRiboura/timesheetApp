const service = require('../services/occupation.service');

module.exports = {
    async index(_req, res){

        try {
            const occupation = await service.index();
            return res.json(occupation)
        } catch( erro ) {
            return res.send({ errorMessage: erro });
        }
    },
    
    async store(req, res) {
        const { name, time_in, time_out } = req.body;
        try {
            console.log(name);
            const occupation = await service.store({ name, time_in, time_out});
            return res.json(occupation);
        } catch ( erro ) {
            return res.send({ errorMessage: erro });
        }
    }
};