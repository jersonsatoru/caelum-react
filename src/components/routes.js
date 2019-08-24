import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from '../Pages/Home';
import Login from '../Pages/LoginPage';
import NotFound from '../Pages/NotFound';

const Roteamento = (prop) => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Roteamento;