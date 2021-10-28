// import React from 'React';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';

import Home from './pages/home/home.page';
import Login from './pages/login/login.page';
import Cadastro from './pages/cadastro/cadastro.page';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro}/>
            </Switch>
        </Router>
    );
}