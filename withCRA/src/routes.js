import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Login from './components/login';
import PasswordRecovery from './components/login/PasswordRecovery'

const routes = (
    <Route path="/">
        <IndexRoute component={Login} />
        <Route path="recovery" component={PasswordRecovery} />
    </Route>
);

export default routes;
