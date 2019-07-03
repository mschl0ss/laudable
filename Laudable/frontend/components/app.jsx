import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from './main/main_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

export default () => (
    <div>
        {/* <Route path="/" component={NavBarContainer} /> */}
        <Switch>
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <Route path="/" component={MainContainer} />
        </Switch>

    </div>
)