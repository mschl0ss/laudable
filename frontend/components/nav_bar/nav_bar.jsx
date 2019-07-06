import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            search: '',
            showUserNavDropDown: false,
            showSiteNavDropDown: false,
            hideDelay: 0
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
        return (
            this.props.currentUser ? (
            <nav className="protected-user">
                <div className="wrapper">
                    <div className="user-dropdown" 
                            onMouseLeave={this.hideUserNavDropDown}
                            >
                        <button 
                            onClick={this.toggleUserNavDropDown }
                            onMouseOver={this.showUserNavDropDown}
                            >
                            Hi, {this.props.currentUser.username}!
                            <span className="down-arrow">&#8735;</span>
                        </button>
                        <div className={dropDownClass}>
                            <span className="arrow"></span>
                            <div className = "user-dropdown-box">
                                <ul>
                                    <li className="lh">Membership Status</li>
                                    <li className="strong">Gold Monthly</li>
                                </ul>
                                
                                <button 
                                    onClick={this.logoutActions}
                                    
                                    >Not {this.props.currentUser.username}? Sign Out</button>
                            </div>
                        </div>
                    </div>
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

    siteNavProtected(loggedIn) {
        
        if (loggedIn) {
            return (
             <div className="site-nav-items">
                <div className="site-nav-item">Wish List</div>
                <div className="site-nav-item">Browse</div>
            </div>
            )
        }
    }

    siteNav () {

        // const dropDownClass = this.state.showSiteNavDropDown ? "browse-dropdown-content show" : "browse-dropdown-content show";
        const dropDownClass = this.state.showSiteNavDropDown ? "browse-dropdown-content show" : "browse-dropdown-content hidden";
        const loggedIn = this.props.currentUser ? true : false;
        const className = loggedIn ? 'site-nav protected' : 'site-nav auth';
        const logo = loggedIn ? "audible_logo.jpg" : "audible_logo_white_text.png";
        const searchIcon = loggedIn ? "searchicondark.png" : "searchbutton.svg";
        
        return (
            <nav className={className}>

                <div className="left">
                    {/* <img className="logo" src={logo} /> */}
                    <span className="logo-text">
                        laudible
                        <span>&#319;</span>
                    </span>
                    {/* ** LINKS */}
                    <ul>
                        <li
                            className={loggedIn ? "" : "hidden"}
                        >Wish List</li>
                        <li
                            className={loggedIn ? "" : "hidden"}
                        >Library</li>
                    </ul>

                    {/* **BROWSE BUTTON */}
                    <div className="browse-dropdown" 
                        onMouseLeave={this.hideSiteNavDropDown}
                        >
                            <button 
                                onClick={this.toggleSiteNavDropDown} 
                                onMouseOver={this.showSiteNavDropDown}
                            >
                                Browse
                                <span className="down-arrow">&#8735;</span>
                            </button>
                            <div className={dropDownClass} >
                            <span className="arrow"></span>
                            <div className="category-dropdown-box">
                                <div className="row">
                                    <ul>
                                        <li className="lh">Fiction</li>
                                        <li>Historical</li>
                                        <li>Westerns</li>
                                        <li>Literary</li>
                                        <li>Humor</li>
                                        <li>Contemporary</li>
                                        <li>Historical</li>
                                        <li>Westerns</li>
                                        <li>Literary</li>
                                        <li>Humor</li>
                                    </ul>
                                    <ul>
                                        <li className="lh">Sci-Fi &amp; Fantasy</li>
                                        <li>Alternate History</li>
                                        <li>Sword &amp; Sworcery</li>
                                        <li>Dark Fantasy</li>
                                        <li>Sci Fi&#58; Classics</li>
                                        <li>Post&#8211;Apocalyptic</li>
                                        <li>Alternate History</li>
                                        <li>Sword &amp; Sworcery</li>
                                        <li>Dark Fantasy</li>
                                        <li>Sci Fi&#58; Classics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                    
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