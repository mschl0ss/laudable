import { combineReducers } from 'redux';

import sessionErrors from './errors/session_errors_reducer';
import ebErrors from './errors/error_boundary_reducer';

export default combineReducers ({
    session: sessionErrors,
    ebErrors: ebErrors
});