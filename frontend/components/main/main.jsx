import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';
import SplashContainer from '../splash/splash_container';

import Carousel from '../book_carousel/carousel';


class Splash extends React.Component {




    render () {
        
        return (

            
            <div id="main">
                {/* <Route whatever></Route> */}
                <NavBarContainer/>
                <AuthRoute exact path="/" component={SplashContainer} />
                <Route path="/carousel" component={Carousel} />
               
                
            </div>
        )
    }
}

export default Splash;