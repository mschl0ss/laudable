import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            repassword: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    updateField(field) {
        return e => (
            this.setState( { [field]: e.target.value } )
        )
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then( () => this.props.history.push('/'));
    }

    renderErrors() {
        let errorClass, errorUlClass = '';

        if (this.props.errors.length > 0) {
            errorClass = 'session-errors';
            if (this.props.errors.length > 1) errorUlClass = ' bullets';
        } else { errorClass = 'hidden' }
        return (
            <section className={errorClass}>
                <div className="left">
                    <div className="alert-img"></div>
                </div>
                <div className="right">
                    <h4>There was a problem</h4>
                    <ul className={errorUlClass}>
                        {this.props.errors.map((error, i) => (
                            <li key={i} >{error}</li>
                        ))}
                    </ul>
                </div>
            </section>
        )
    }

    render() {
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
                    <h3>Create account</h3>
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
                            </li>
                            <li>
                            <label>Email
                                <input 
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.updateField('email')}
                                />
                            </label>
                            </li>
                            <li>
                                <label>Password
                                    <input 
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.updateField('password')}
                                        placeholder="At least 6 characters"
                                    />
                                    <span className="hint">Passwords must be at least 6 characters</span>
                                </label>
                            </li>
                            <li>
                                <label>Re-enter password
                                    <input 
                                        type="password"
                                        value={this.state.repassword}
                                        onChange={this.updateField('repassword')}
                                    />
                                </label>
                            </li>
                        </ul>
                        <button className="orange-button">Create your Laudable Account</button>
                    </form>

                    <p className="signup">
                        By creating an account, you agree to absolutely nothing.  But
                        here's Amazon's
                        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">
                            Conditions of Use
                        </a>
                        and
                        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496">
                            Privacy Notice
                        </a>
                        .
                    </p>

                    <div className="hacky signup">
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    </div>
                </section>
                <Footer />
            </section>
        )
    }
}

export default Signup;