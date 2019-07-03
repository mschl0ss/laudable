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
        // debugger;
        return (
            <section className = "session-errors">
                <ul>
                    {this.props.errors.map( (error,i) => (
                        <li key={i} >{error}</li>
                    ))}
                </ul>
            </section>
        )
    }

    render () {
        return (
            <section className="session-wrapper">
                <div className="logo"></div>

                {this.renderErrors()}

                <section className="session-form">
                    <h3>Sign in with your Username</h3>
                    <form onSubmit={this.handleSubmit}>
                        <ul>
                            <li>
                                <label>Username:
                                    <input
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.updateField('username')}
                                    />
                                </label>
                            </li><li>
                                <label>Password:
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.updateField('password')}
                                    />
                                </label>
                            </li><li>
                                <button className="orange-button">Login</button>
                            </li>
                        </ul>
                    </form>
                </section>
            </section>
        )
    }
}

export default Login;