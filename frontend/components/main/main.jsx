//package imports
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

//local imports
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';
import SplashContainer from '../splash/splash_container';
import CategoryIndexContainer from '../categories/category_index_container';
import CategoryShowContainer from '../categories/category_show_container';
import BookIndexContainer from '../books/book_index_container';
import BookShowContainer from '../books/book_show_container';
import ReviewFormContainer from '../reviews/review_form_container';

import Footer from './footer';
import CarouselContainer from '../book_carousel/carousel_container';
import ReactDemoWrapper from '../redux_demo/redux_demo_wrapper';


class Main extends React.Component {
       
    componentDidUpdate(prevProps) {
        if (this.props.currentUser !== prevProps.currentUser) {
           //i guess do nothing
        }
    }
    
    render() {

        return (
        <div id="main-wrapper">

            <NavBarContainer />

            <div id="main-body">
                <Switch>

                    <ProtectedRoute path="/categories/:categoryId" component={CategoryShowContainer} />
                    <ProtectedRoute exact path="/categories/" component={CategoryIndexContainer} />

                    <ProtectedRoute path="/books/filteredList" component={BookIndexContainer} />
                    <ProtectedRoute path="/books/:bookId/createReview" component={ReviewFormContainer} />
                    <ProtectedRoute exact path="/books/:bookId" component={BookShowContainer} />

                    <Route exact path="/carousel" component={CarouselContainer} />
                    {/* <AuthRoute exact path="/" component={SplashContainer} />
                    <ProtectedRoute exact path="/" component={SplashContainer} /> */}
                    
                    <Route exact path="/reduxDemo" component={ReactDemoWrapper} />
                    <Route exact path="/" component={SplashContainer} />
                </Switch>
            </div>

        

            <Footer />
        </div>
)}

}

export default Main;