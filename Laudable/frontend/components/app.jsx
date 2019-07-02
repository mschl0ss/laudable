import React from 'react';
import { Route } from 'react-router-dom';

import Splash from './splash/splash';
import SignupContainer from './session/signup_container';

export default () => (
    <div>
        <Route exact path="/" component={Splash} />
        <Route path="/signup" component={SignupContainer} />

    </div>
)