const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const Employee = require('../models/employee.model');
const Occupation = require('../models/occupation.model');
const TimeWorking = require('../models/timeWorking.model');
const User = require('../models/user.model');

const models = [
    Employee,
    Occupation,
    User,
    TimeWorking
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConfig);
        models
            .map(model => model.init(this.connection));
    }
}

module.exports = new Database();