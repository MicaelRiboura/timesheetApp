const Employee = require('../models/employee.model');

module.exports = {
    async index (req, res) {
        try {
            const employee = await Employee.findAll();
            return res.json(employee);
        } catch( erro ) {
            console.log(erro);
            return;
        }
    },

    async find(req, res){
        try{
            const { id } = req.params;
            const employee = await Employee.findOne({ where: { id }});
            return res.json(employee);
        }catch( erro ){
            console.log( erro )
            return;
        }
    },
    
    async store (req, res) {
        const { name, role, occupation_id } = req.body;
        try {
            const employee = await Employee.create({ name, role, occupation_id });
            return res.json(employee);
        } catch( erro ) {
            console.log(erro);
            return;
        }
    },

    async update (req, res) {
        const { id } = req.params;
        const { name, role, occupation_id } = req.body;
        try {
            const employee = await Employee.update({ 
                name, 
                role, 
                occupation_id 
            }, {where: {id}});

            return res.json(employee);
        } catch( erro ) {
            console.log(erro);
            return;
        }
    },

    async destroy (req, res) {
        const { id } = req.params;
        try {
            const employee = await Employee.destroy({where: {id}});
            return res.json(employee);
        } catch( erro ) {
            console.log(erro);
            return;
        }
    }
}