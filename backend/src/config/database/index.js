const Sequelize = require('sequelize');
const dbConfig = require('../dbConfig');

const connection = new Sequelize(dbConfig);

module.exports = connection;