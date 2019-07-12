import React from 'react';
import { Link } from 'react-router-dom';
import BrowseDropDownContainer from './browse_dropdown_container';
import SearchBarContainer from './search_bar_container';
import UserDropDown from './user_dropdown';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            search: '',
            showUserNavDropDown: false,
            showSiteNavDropDown: false,
            hideDelay: 0,
            loggedIn: this.props.currentUser ? true : false,
        }
    }

    updateField(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    //----------------
    // -------USER NAV
    //----------------

    userNav () {
        // const dropDownClass = this.state.showUserNavDropDown ? "user-dropdown-content show" : "user-dropdown-content show";
        const dropDownClass = this.state.showUserNavDropDown ? "user-dropdown-content show" : "user-dropdown-content hidden";

        return (
            this.props.currentUser ? (
            <nav className="protected-user">
                <div className="wrapper">
                    <UserDropDown 
                        logout={this.props.logout}
                        currentUser={this.props.currentUser} />
                    <div className="separator"></div>
                    <img className="cart" src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png" />
                </div>
            </nav>
            ) :
            (
            <nav className="auth-user">
                <Link className="btn" to="/login">Sign In</Link>
            </nav>
            )
        )
    }


    //----------------
    // -------SITE NAV
    //----------------

    siteNav () {

        // const dropDownClass = this.state.showSiteNavDropDown ? "browse-dropdown-content show" : "browse-dropdown-content show";
        const dropDownClass = this.state.showSiteNavDropDown ? "browse-dropdown-content show" : "browse-dropdown-content hidden";
        const loggedIn = this.props.currentUser ? true : false;
        const className = loggedIn ? 'site-nav protected' : 'site-nav auth';
        const searchIcon = loggedIn ? "searchicondark.png" : "searchbutton.svg";
        
        return (
            <nav className={className}>

                <div className="left">
                   
                    {/* LOGO */}
                    <div className="logo">
                        <Link to="/categories/">
                            <span className="logo-text">
                                laudable
                                <span>&#319;</span>
                            </span>
                        </Link>
                    </div>

                    {/*LINKS */}
                    <ul className={loggedIn ? "" : "hidden"}>
                        <li>Wish List </li>
                        <li>Library</li>
                    </ul>
                    <BrowseDropDownContainer color={loggedIn ? "black" : "white"}/> 
                    
                </div>


                <div className="right search">
                    <SearchBarContainer searchIcon={searchIcon} loggedIn={loggedIn}/>
                </div>
            </nav>
            
        )
    }
  
    render () {
        return (
        <header className="nav-bar">
            <nav>
                {this.userNav()}
                {this.siteNav()}
            </nav>
        </header>
        )
    }
}

export default NavBar;