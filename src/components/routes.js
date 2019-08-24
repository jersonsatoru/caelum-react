import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import Home from '../Pages/Home';
import Login from '../Pages/LoginPage';
import Logout from '../Pages/Logout';
import NotFound from '../Pages/NotFound';

const RotaProtegida = ({...props}) => {
    const token = localStorage.getItem('token');
    
    if (token) {
        return <Redirect to="/" />
    }
    
    return <Route {...props} />;
};

const RotaAutenticada = (props) => {
    const token = localStorage.getItem('token');
    
    if (token) {
        return <Route {...props} />
    }

    return <Redirect to="login" />
}

const Roteamento = (prop) => {
    return (
        <Switch>
            <RotaAutenticada path="/" component={Home} exact />
            <RotaProtegida deveEstarAutenticado={false} path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Roteamento;