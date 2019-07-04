import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';
import AuthSplash from '../splash/auth_splash';


class Splash extends React.Component {




    render () {
        const display = this.props.currentUser ? (
            <div>
                <h4>LOG IN SPLASH</h4>
                
            </div>
        ) : (
            <div>
                {/* <h4>NOT LOGGED IN SPLASH</h4>
                <button onClick={this.props.loginGuestUser}>Guest Login</button> */}
            </div>
        );
        
        return (
            <div>
                {/* <Route whatever></Route> */}
                <NavBarContainer/>
                <AuthRoute exact path="/" component={AuthSplash} />
                {display}
                
            </div>
        )
    }
}

export default Splash;