import React from 'react';
import { Route } from 'react-router-dom';

import Splash from './splash/splash';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

export default () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={Splash} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        {/* <ProtectedRoute path="/chirps" component={ChirpIndexContainer} /> */}

    </div>
)