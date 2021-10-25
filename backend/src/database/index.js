const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const Employee = require('../models/employee.model');

const connection = new Sequelize(dbConfig);

Employee.init(connection);

module.exports = connection;