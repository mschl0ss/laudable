import React from 'react';


class BrowseDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            hideDelay: 0
        }

        this.toggle = this.toggle.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
    }
    toggle () {
        let delay = this.state.hideDelay;
        setTimeout(() => this.setState({ show: !this.state.show }), delay);
    }

    hide() {
        setTimeout(() => this.setState({ show: false }), this.state.hideDelay);
    }

    show() {
        this.setState({ show: true });
    }

    leftContent () {
        return (
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
        )
    }

    rightContent () {

        return (
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
        )
    }

    render () {

        const contentClass = this.state.show ? "bdd-content-wrapper" : "hidden";
        // const contentClass = "bdd-content-wrapper" ;
        return (
            // this div wraps the whole shebang
            <div 
                className="bdd-container" 
                onMouseLeave={this.hide}
                style={{color: this.props.color}}
                >

                {/* this button is the link the user sees on the nav bar */}
                <div
                    className="bdd-button"
                    onClick={this.toggle} 
                    onMouseOver={this.show} >
                    Browse
                    <span className="bdd-down-caret">&#8735;</span>
                </div>

                {/* this wraps the whole hidden/shown content */}
                <div className={contentClass} >

                    {/* this is the little triangle on top of the box */}
                    <span className="bdd-beak"></span>

                    {/* this is the actual content */}
                    <div className="bdd-content">
                        {this.leftContent()} {this.rightContent()}
                    </div>

                </div>
            </div>  
            )
    }           
}

export default BrowseDropDown;