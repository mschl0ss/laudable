import React from 'react';
import {connect} from 'react-redux';
import { receiveEBErrors } from '../actions/error_boundary_actions'

const mdp = dispatch => ({
    dispatchErrors: errors=> dispatch(receiveEBErrors(errors))
});

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        debugger;
        this.setState({ hasError: true });
        this.props.dispatchErrors(error)


        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            debugger;
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default connect(null,mdp)(ErrorBoundary);