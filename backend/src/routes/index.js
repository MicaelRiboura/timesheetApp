const express = require('express');
const routes = express.Router();

const EmployeeController = require('../controllers/employee.controller');
const OccupationController = require('../controllers/occupation.controller');
const UserController = require('../controllers/user.controller');

routes.get('/employees', EmployeeController.index);
routes.get('/employees/:id', EmployeeController.find);
routes.post('/employees', EmployeeController.store);
routes.post('/employees/:id', EmployeeController.update);
routes.delete('/employees/:id', EmployeeController.destroy);

routes.post('/occupation', OccupationController.store);
routes.get('/occupation', OccupationController.index);

routes.post('/signup', UserController.signup);
routes.post('/signin', UserController.signin);
routes.post('/validate-token', UserController.validateToken);


module.exports = routes;