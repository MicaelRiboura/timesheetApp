// import React from 'React';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import Home from './pages/home/home.page';
import Login from './pages/login/login.page';

export default function Routes() {

    const { signed } = useAuth();

    console.log(signed);  

    if(signed) {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/history" component={Login} />
                    <Route path="*" component={Home} />
                </Switch>
            </Router>
        );
    } else {
        return (
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="*" component={Login} /> 
                </Switch>
            </Router>
        );
    }
}