const express = require('express');
const routes = express.Router();

const EmployeeController = require('../controllers/employee.controller');
const OccupationController = require('../controllers/occupation.controller');

routes.get('/employees', EmployeeController.index);
routes.get('/employees/:id', EmployeeController.find);
routes.post('/employees', EmployeeController.store);
routes.post('/employees/:id', EmployeeController.update);
routes.delete('/employees/:id', EmployeeController.destroy);

routes.post('/occupation', OccupationController.store);
routes.get('/occupation', OccupationController.index);



module.exports = routes;