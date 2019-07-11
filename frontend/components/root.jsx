import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import ErrorBoundary from '../utils/error_boundary'

export default ({ store }) => (
    <Provider store={store}>
        <ErrorBoundary>
            <HashRouter>
                <App />
            </HashRouter>
        </ErrorBoundary>
    </Provider>
);
