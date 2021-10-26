const Model = require('../models/occupation.model');

module.exports = {
    async index(){
        try{
           return await Model.findAll();

        } catch( erro ) {
            console.log(erro);
            return erro;
        }
    },
    
    async store({ name, time_in, time_out }) {
        try{
            return await Model.create({ name, time_in, time_out});

        } catch( erro ) {
            console.log(erro);
            return erro;
        }

    }
};