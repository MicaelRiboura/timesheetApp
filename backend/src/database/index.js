const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const Employee = require('../models/employee.model');

const models = [
    Employee
];


class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConfig);
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database();