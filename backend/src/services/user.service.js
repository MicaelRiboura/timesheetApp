require('dotenv/config');
const Model = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');

module.exports = {
    async signup({ name, socialId, password }){

        const encriptPassword = p => {
            const salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(p, salt);
        }
        try{
           return await Model.create({ name, socialId, password: encriptPassword(password) });
           
        } catch( erro ) {
            console.log(erro);
            return erro;
        }
    },

    async signin({ socialId, password }){
        try{
           const user = await Model.findOne({ where: { socialId }});;
           const isMatch = bcrypt.compareSync(password, user.password);
            if(!isMatch) throw "Email/senha inválidos";

            const now = Math.floor(Date.now() / 1000);

            console.log('user: ', user);
            const payload = {
                id: user.id,
                // name: user.name,
                iat: now,
                exp: now + (60 * 60 * 24 * 3)
            };

            return {
                ...payload,
                token: jwt.encode(payload, process.env.AUTH_SECRET)
            };

        } catch( erro ) {
            console.log(erro);
            return erro;
        }
    },

    async validateToken({ token }) {
        try {
            if(token) {
                const tokenDecoded = jwt.decode(token, process.env.AUTH_SECRET);
                if(new Date(tokenDecoded.exp * 1000) > new Date()) {
                    return true;
                }
            }
        } catch( erro ) {
            return erro;
        }

        return false;
    }
};