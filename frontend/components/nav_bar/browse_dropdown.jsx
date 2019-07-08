import React from 'react';
import { Link } from 'react-router-dom';


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

    componentDidMount(){
        this.props.fetchCategories();
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

    renderContent() {
        const roots = this.props.rootCategories ? this.props.rootCategories : [];
        const rootList = roots.map (root => (
            <li key={root.id}><Link to={`/categories/${root.id}`}>{root.categoryName}</Link></li>
        ))
        return(
        <ul>
            <li className="lh">Audiobook Categoires</li>
            {rootList}
            <li><Link to="/categories/">All Categories</Link></li>
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
                        {this.renderContent()}
                    </div>

                </div>
            </div>  
            )
    }           
}

export default BrowseDropDown;