import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.linkToSignup = this.linkToSignup.bind(this);
    }

    componentDidMount(){
        this.props.clearSessionErrors();
    }
    
    updateField(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => this.props.history.push('/'));
    }

    linkToSignup() {
        this.props.history.push('/signup')
    }

    renderErrors() {
        let errorClass, errorUlClass ='';

        // errorClass = this.props.errors.length > 0 ? 'session-errors' : 'hidden';
        if (this.props.errors.length > 0) {
            errorClass = 'session-errors';
            if (this.props.errors.length > 1) errorUlClass = ' bullets';
        } else { errorClass = 'hidden'}
        return (
            <section className = {errorClass}>
                <div className="left">
                    <div className="alert-img"></div>
                </div>
                <div className="right">
                    <h4>There was a problem</h4>
                    <ul className={errorUlClass}>
                        {this.props.errors.map( (error,i) => (
                            <li key={i} >{error}</li>
                        ))}
                    </ul>
                    </div>
            </section>
        )
    }

    render () {
        return (
            <section className="session-wrapper">
                <div className="logo">
                    {/* <img src="audible_logo.jpg" alt="logo" /> */}
                    {/* LOGO */}
                    <Link to="/">
                        <span className="logo-text">
                            laudable
                            <span>&#319;</span>
                        </span>
                    </Link>
                </div>

                {this.renderErrors()}

                <section className="session-form">
                    <h3>Sign in with your Username</h3>
                    <form onSubmit={this.handleSubmit}>
                        <ul>
                            <li>
                                <label>Username
                                    <input
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.updateField('username')}
                                    />
                                </label>
                            </li><li>
                                <label>Password
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.updateField('password')}
                                    />
                                </label>
                            </li><li>
                                <button className="orange-button">Sign In</button>
                            </li>
                        </ul>

                    </form>

                    <div className="guest-login">
                        <p onClick={this.props.loginGuestUser}>Guest login</p>
                    </div>
                        
                        <div className="divider">
                            <h5><span>New to Laudable?</span></h5>
                        </div>
                        <div >
                            <button 
                                className="gray-button"
                                onClick={this.linkToSignup}>Create your Laudable account</button>
                        </div>
                </section>

                <Footer />
            </section>
        )
    }
}

export default Login;