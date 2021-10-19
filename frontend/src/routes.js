// import React from 'React';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
import Home from './pages/Home';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}