const Model = require('../models/employee.model');

module.exports = {
    async index () {
        try {
           return  await Model.findAll();
        } catch( erro ) {
            console.log(erro);
            return erro;
        }
    },

    async find({ id }){
        try{
            return await Model.findOne({ where: { id }});
        }catch( erro ){
            console.log( erro )
            return erro;
        }
    },
    
    async store ({ name, socialId, occupation_id }) {
        try {
            return await Model.create({ name, socialId, occupation_id });
        } catch( erro ) {
            console.log(erro);
            return erro;
        }
    },

    async update ({id, name, socialId, occupation_id}) {
        try {
            return await Model.update({ 
                name, 
                socialId, 
                occupation_id 
            }, {where: {id}});

        } catch( erro ) {
            console.log(erro);
            return erro;
        }
    },

    async destroy ({ id }) {
        try {
            return await Model.destroy({where: {id}});
        } catch( erro ) {
            console.log(erro);
            return erro;
        }
    }
}