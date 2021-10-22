// import React from 'React';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
import Home from './pages/home.page';
import Login from './pages/login.page';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}