import React from 'react';
import { Route } from 'react-router-dom';

import Splash from './splash/splash';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container'

export default () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={Splash} />
        <Route path="/signup" component={SignupContainer} />

    </div>
)