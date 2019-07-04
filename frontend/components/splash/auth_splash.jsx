import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ErrorBoundary from '../../utils/error_boundary';


class AuthSplash extends React.Component {



    render () {

        return (
        <section className="splash-main-auth">
            
            <div className="top">
                <div className="movie">
                    <img src="auth_splash_banner.gif" />
                </div>
                <div className="splash-content">
                    <h1>You're getting a free audiobook</h1>
                    <button className='orange-button'>Click to Try Laudible Free</button>
                </div>
            </div>
        </section>
        )
    }


}

export default AuthSplash;