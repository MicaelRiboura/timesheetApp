const Occupation = require('../models/occupation.model')

module.exports = {
    async index(req, res){
        const occupation = await Occupation.findAll();
        return res.json(occupation)
    },
    
    async store(req, res) {
        const { name, time_in, time_out } = req.body;

        const occupation = await Occupation.create({ name, time_in, time_out});
        return res.json(occupation)
    }
};