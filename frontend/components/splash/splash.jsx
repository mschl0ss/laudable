import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ErrorBoundary from '../../utils/error_boundary';


class Splash extends React.Component {



    redirect() {
        this.props.history.push("/categories/");
    }
    render () {
        
        if (this.props.currentUser) {
            this.redirect();}
        return (
        <div>
        <section className="splash-main-auth">
            <div className="movie">
                <img src="auth_splash_banner.gif" />
            </div>
            
            <section className="top">
                <div className="splash-banner-content">
                    <h1>This is Laudable.</h1>
                    <button className='orange-button' onClick={this.props.loginGuestUser}>Click to Try Laudable Free</button>
                </div>
                
            </section>

            <section className="hr">
                <aside>
                    {/* <span onClick={this.props.loginGuestUser}>
                        Learn more &#10148;
                    </span> */}
                    <img src="https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/A4-653_PrimeDay_2019_AU_MA_LandingPage_DT_PrimeExclusive_1440x100_V01.jpg" />
                </aside>
            </section>

            {/* GET STARTED  */}
            <section className="get-started">
                <header>
                    <div className="selected">
                        <img src="https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/landing/ANON/icon_GetStarted_v3._CB1539285331_.svg" />
                        <span>Get Started</span>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/landing/ANON/icon_Cancel.svg_v3._CB1539289548_.svg" />
                        <span className="graytext">Available for Mobile</span>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/landing/ANON/icon_AnyDevice_v3._CB1539285331_.svg" alt="Listen to Audible on any device." />
                        <span className="graytext">Listen Anywhere</span>
                    </div>
                </header>


                <section>
                    <div className="left">
                        <h4>Start your free 30-day trial</h4>
                        <ul>
                            <li><span>&#10003;</span>Free membership for 30 days</li>
                            <li><span>&#10003;</span>Free membership after that, too.</li>
                                    <li><span>&#10003;</span>Free membership.  It's just free.<span className="aquamarine">&#8727;</span></li>
                        </ul>
                            <button className='orange-button' onClick={this.props.loginGuestUser}>Click to Try Laudable Free</button>
                            <aside><span className="aquamarine">&#8727;</span> &#65284;14.95 per month after 30 years. Cancel requires trial by combat.</aside>
                    </div>
                    <div className="right">
                        <img src="get_started_books.jpg" />
                    </div>
                </section>
            </section>

            {/* SLIDESHOW PROP */}
            <section className="slideshow-prop">
                <h5>It's time to start looking at color boxes!  Look at 'em!</h5>
                <div className="grid-wrapper">
                    <div className="slideshow-prop-grid">
                        <div className="grid-item">
                            <div className="square-small yellow "></div>
                        </div>
                        <div className="grid-item">
                            <div className="square-small lightblue "></div>
                        </div>
                        <div className="grid-item">
                            <div className="square-small ivory "></div>
                        </div>
                        <div className="grid-item">
                            <div className="square-small skyblue"></div>
                        </div>
                    </div>
                        <div className="grid-item big">
                            <div className="square-big pinkish"></div>
                        </div>
                    <div className="slideshow-prop-grid">
                        <div className="grid-item">
                            <div className="square-small red"></div>
                        </div>
                        <div className="grid-item">
                            <div className="square-small darkteal"></div>
                        </div>
                        <div className="grid-item">
                            <div className="square-small bone"></div>
                        </div>
                        <div className="grid-item">
                            <div className="square-small gray"></div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
            
        </div>
        )
    }


}

export default Splash;