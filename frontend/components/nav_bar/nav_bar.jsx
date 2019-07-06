import React from 'react';
import { Link } from 'react-router-dom';
import BrowseDropDown from './browse_dropdown';
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
        this.toggleUserNavDropDown = this.toggleUserNavDropDown.bind(this);
        this.toggleSiteNavDropDown = this.toggleSiteNavDropDown.bind(this);
        this.showUserNavDropDown = this.showUserNavDropDown.bind(this);
        this.hideUserNavDropDown = this.hideUserNavDropDown.bind(this);
        this.showSiteNavDropDown = this.showSiteNavDropDown.bind(this);
        this.hideSiteNavDropDown = this.hideSiteNavDropDown.bind(this);

        this.logoutActions = this.logoutActions.bind(this);
    }
    
    logoutActions() {
        this.hideUserNavDropDown();
        this.props.logout();
    }

    toggleUserNavDropDown() {
        let delay = this.state.hideDelay;
        if (this.state.showUserNavDropDown === false) delay = 0;

        setTimeout(() => this.setState({ showUserNavDropDown: !this.state.showUserNavDropDown }), delay);
    }

    toggleSiteNavDropDown() {
        let delay = this.state.hideDelay;
        if (this.state.showSiteNavDropDown === false) delay = 0;

        setTimeout(() => this.setState({ showSiteNavDropDown: !this.state.showSiteNavDropDown}), delay);
    }

    hideUserNavDropDown () {
        setTimeout(() => this.setState({ showUserNavDropDown: false }), this.state.hideDelay);
    }
    showUserNavDropDown () {
        this.setState({ showUserNavDropDown: true });
    }

    hideSiteNavDropDown() {
        setTimeout(() => this.setState( {showSiteNavDropDown: false} ), this.state.hideDelay);
    }
    showSiteNavDropDown() {
       this.setState( {showSiteNavDropDown: true} );
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
        console.log(this.state.loggedIn);
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
                    <span className="logo-text">
                        laudible
                        <span>&#319;</span>
                    </span>

                    {/*LINKS */}
                    <ul className={loggedIn ? "" : "hidden"}>
                        <li>Wish List </li>
                        <li>Library</li>
                    </ul>
                    <BrowseDropDown color={loggedIn ? "black" : "white"}/> 
                    
                </div>


                <div className="right search">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.search}
                            onChange={this.updateField('search')}
                            placeholder="Find your next great listen"
                        />
                        <img src={searchIcon}></img>
                        {/* <span className="search-icon rotate">&#x260C;</span> */}
                    </form>
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