import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/login/Login'
import Home from './components/home/Home'

const Routes = () => (

    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
        </Switch>
    </Router>

)
export default Routes