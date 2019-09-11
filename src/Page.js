import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import App from './App';


export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/index" push />} />
            <Route path="/app" render={props=><App {...props} />} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" render={props=><Login {...props} />} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);
