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
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <div>
                <ul>
                    {this.props.errors.map( (error,i) => (
                        <li key={i} >{error}</li>
                    ))}
                </ul>
            </div>
        )
    }

    render () {
        return (
            <div className="session-form">
                <h1>Login</h1>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.updateField('username')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.updateField('password')}
                        />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;