const express = require('express');
const routes = express.Router();

const EmployeeController = require('../controllers/employee.controller');

// routes.get('/', (req, res) => {
//     return res.json({hello: 'world'});
// });

routes.post('/employees', EmployeeController.store);

module.exports = routes;