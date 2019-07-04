import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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

    renderErrors() {
        let errorClass;

        errorClass = this.props.errors.length > 0 ? 'session-errors' : 'hidden';
        return (
            <section className = {errorClass}>
                <div className="left">
                    <div className="alert-img"></div>
                </div>
                <div className="right">
                    <h4>There was a problem</h4>
                    <ul>
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
                    <img src="audible_logo.jpg" alt="logo" />
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

                        <div className="divider">
                            <h5>New to Audible?</h5>
                            <button className="gray-button">Create your Audible account</button>
                        </div>
                    </form>
                </section>
            </section>
        )
    }
}

export default Login;