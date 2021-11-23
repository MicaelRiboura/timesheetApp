// import React from 'React';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import EmployeeRegister from "./pages/cadastro/employee.register";
import OccupationRegister from "./pages/cadastro/occupation.register";
import TimeWorkingRegister from "./pages/cadastro/time-working.register";
import History from "./pages/historico/historico.page";
import Home from "./pages/home/home.page";
import Login from "./pages/login/login.page";

export default function Routes() {
  const { signed } = useAuth();
  console.log('routes::signed: ', signed);

  if (signed) {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/funcionario/cadastro" component={EmployeeRegister} />
          <Route path="/funcionario/historico/:socialId" component={History} />
          <Route path="/cargo/cadastro" component={OccupationRegister} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/master" component={Login} />
          <Route path="/" component={TimeWorkingRegister} />
          <Route path="*" component={Login} />
        </Switch>
      </Router>
    );
  }
}
