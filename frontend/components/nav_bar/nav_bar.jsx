import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            search: '',
            showUserNavDropDown: false,
            showSiteNavDropDown: false,
        }
        this.toggleUserNavDropDown = this.toggleUserNavDropDown.bind(this);
        this.toggleSiteNavDropDown = this.toggleSiteNavDropDown.bind(this);
        this.hideSiteNavDropDown = this.hideSiteNavDropDown.bind(this);
    }
    

    toggleUserNavDropDown() {
      this.setState({ showUserNavDropDown: !this.state.showUserNavDropDown });
    }

    toggleSiteNavDropDown() {
        let delay = 0;
        if (this.state.showSiteNavDropDown === true) delay = 200;
        // console.log(this.state.showSiteNavDropDown);

        setTimeout(() => this.setState({ showSiteNavDropDown: !this.state.showSiteNavDropDown}), delay);
    }

    hideSiteNavDropDown() {
        this.setState( {showSiteNavDropDown: false} );
    }

    userNav () {
        const dropDownClass = this.state.showUserNavDropDown ? "dropdown-content show" : "dropdown-content hidden";
        return (
            this.props.currentUser ? (
            <nav className="protected">
                <div className="dropdown">
                    <button onClick={this.toggleUserNavDropDown }>Hi, {this.props.currentUser.username}</button>
                    <div 
                        className={dropDownClass}
                    >
                        <button onClick={this.props.logout}>Log Out</button>
                    </div>
                </div>
            </nav>
            ) :
            (
            <nav className="auth">
                <Link className="btn" to="/login">Sign In</Link>
            </nav>
            )
        )
    }


    updateField(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    siteNav () {

        // const dropDownClass = this.state.showSiteNavDropDown ? "category-dropdown-content show" : "category-dropdown-content show";
        const dropDownClass = this.state.showSiteNavDropDown ? "category-dropdown-content show" : "category-dropdown-content hidden";

        return (
            this.props.currentUser ? (
                <nav className="site-nav-protected">
                    protected site nav
                </nav>
            ) : 
            (
            <nav className="site-nav-auth">

                <div className="left">
                    <img className="logo" src="audible_logo_white_text.png" />
                    <div className="browse-dropdown" 
                        onMouseLeave={this.hideSiteNavDropDown}
                        >
                            <button 
                                onClick={this.toggleSiteNavDropDown} 
                                onMouseOver={this.toggleSiteNavDropDown}
                                
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
                        <img src="searchbutton.svg"></img>
                        {/* <span className="search-icon rotate">&#x260C;</span> */}
                    </form>
                </div>
            </nav>
            )
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