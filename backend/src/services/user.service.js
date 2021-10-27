const Model = require('../models/user.model');
const bcrypt = require('bcrypt');
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
           return;

        } catch( erro ) {
            console.log(erro);
            return erro;
        }
    },
};