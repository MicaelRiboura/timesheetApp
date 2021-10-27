const service = require('../services/user.service');

module.exports = {
    async signup(req, res){
        const { name, socialId, password } = req.body;
        try {
            const user = await service.signup({ name, socialId, password });
            return res.json(user)
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