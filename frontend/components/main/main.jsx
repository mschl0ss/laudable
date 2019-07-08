import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';
import SplashContainer from '../splash/splash_container';
import CategoryIndexContainer from '../categories/category_index_container';
import CategoryShowContainer from '../categories/category_show_container';
import Footer from './footer';

import Carousel from '../book_carousel/carousel';


// class Splash extends React.Component {




//     render () {
        
//         return (

            
//             <div id="main-wrapper">
//                 {/* <Route whatever></Route> */}
//                 <NavBarContainer/>
                
//                 <div id="main-body">
//                     <AuthRoute exact path="/" component={SplashContainer} />

//                     <ProtectedRoute exact path="/category/:categoryId" component={CategoryShowContainer} />
//                     <ProtectedRoute exact path="/categories/" component={CategoryIndexContainer} />
                    
//                     <Route exact path="/carousel" component={Carousel} />
//                 </div>
                


//                 <Footer />
//             </div>
//         )
//     }
// }

const Splash = () => (
    <div id="main-wrapper">
        {/* <Route whatever></Route> */}
        <NavBarContainer />

        <div id="main-body">
            <Switch>

                <ProtectedRoute path="/categories/:categoryId" component={CategoryShowContainer} />
                <ProtectedRoute exact path="/categories/" component={CategoryIndexContainer} />

                <Route exact path="/carousel" component={Carousel} />
                <AuthRoute exact path="/" component={SplashContainer} />
            </Switch>
        </div>



        <Footer />
    </div>
)

export default Splash;