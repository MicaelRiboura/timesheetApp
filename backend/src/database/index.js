const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const Employee = require('../models/employee.model');
const Occupation = require('../models/occupation.model');

//const connection = new Sequelize(dbConfig);
const connection = new Sequelize('timesheet', 'postgres', '123123', {
    host: 'localhost',
    dialect: 'postgres'
});

Employee.init(connection);
Occupation.init(connection);

module.exports = connection;