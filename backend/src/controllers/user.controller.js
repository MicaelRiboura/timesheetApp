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
    
    async signin(req, res) {
        const { socialId, password } = req.body;
        try {
            const responseToken = await service.signin({ socialId, password });
            return res.json(responseToken);
        } catch ( erro ) {
            return res.send({ errorMessage: erro });
        }
    },
    
    async validateToken(req, res) {
        const { token } = req.body;
        try {
            const responseToken = await service.validateToken({ token });
            return res.send(responseToken);
        } catch ( erro ) {
            return res.send({ errorMessage: erro });
        }
    },

    async countUsers(req, res){
        try {
            const count = await service.countUsers();
            return res.json(count)
        } catch( erro ) {
            return res.send({ errorMessage: erro });
        }
    }
};