import React from 'react';

// props needed: logout(), currentUser

class UserDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            hideDelay: 0
        }

        this.toggle = this.toggle.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        this.logoutActions = this.logoutActions.bind(this);
    }
    toggle() {
        let delay = this.state.hideDelay;
        setTimeout(() => this.setState({ show: !this.state.show }), delay);
    }

    hide() {
        setTimeout(() => this.setState({ show: false }), this.state.hideDelay);
    }

    show() {
        this.setState({ show: true });
    }

    logoutActions() {
        this.hide();
        this.props.logout();
    }

    renderContent () {

        return (
            <>
                <ul>
                    <li className="lh">Membership Status</li>
                    <li className="strong">Gold Monthly</li>
                </ul>

                <button 
                    onClick={this.logoutActions}>
                        Not {this.props.currentUser.username}? Sign Out
                </button>
            </>
        )
    }


    render () {
        const contentClass = this.state.show ? "udd-content-wrapper" : "hidden";
        // const contentClass = "udd-content-wrapper" ;
        return (
            // this div wraps the whole shebang
            <div
                className="udd-container"
                onMouseLeave={this.hide}
                >

                {/* this button is the link the user sees on the nav bar */}
                <div
                    className="udd-button"
                    onClick={this.toggle}
                    onMouseOver={this.show} >
                    Hi, {this.props.currentUser.username}!
                    <span className="udd-down-caret">&#8735;</span>
                </div>

                {/* this wraps the whole hidden/shown content */}
                <div className={contentClass} >

                    {/* this is the little triangle on top of the box */}
                    <span className="udd-beak"></span>

                    {/* this is the actual content */}
                    <div className="udd-content">
                        {this.renderContent()}
                    </div>

                </div>
            </div>
        )
    }  
        
}


export default UserDropDown;




