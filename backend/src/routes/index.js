const express = require("express");
const routes = express.Router();
const passportConfig = require("../config/passport");
const EmployeeController = require("../controllers/employee.controller");
const OccupationController = require("../controllers/occupation.controller");
const UserController = require("../controllers/user.controller");
const TimeWorkingController = require("../controllers/timeWorking.controller");
const authenticate = passportConfig.authenticate();

// employees:
routes.get("/employees", authenticate, EmployeeController.index);
routes.get("/employees/:id", authenticate, EmployeeController.find);
routes.post("/employees", authenticate, EmployeeController.store);
routes.post("/employees/:id", authenticate, EmployeeController.update);
routes.delete("/employees/:id", authenticate, EmployeeController.destroy);
routes.get(
  "/employee/socialId/:socialId",
  authenticate,
  EmployeeController.findBySocialId
  );
  //occupations:
  routes.post("/occupation", authenticate, OccupationController.store);
  routes.get("/occupation", authenticate, OccupationController.index);
  //auth:
  routes.post("/signup", UserController.signup);
  routes.post("/signin", UserController.signin);
  routes.post("/validate-token", UserController.validateToken);
  routes.get("/users/count", UserController.countUsers);
  //time_working:
  routes.post("/time-working", TimeWorkingController.store);
  routes.get("/time-workings/:employeeSocialId", authenticate, TimeWorkingController.listForEmployees);
  routes.get("/time-workings/:employeeSocialId/:day", authenticate, TimeWorkingController.listForEmployeesByMonth);


module.exports = routes;
