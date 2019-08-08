import * as sessionUtils from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'


export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

//THE THUNKERINGS

export const createNewUser = formUser => dispatch => {
return (
    sessionUtils.postUser(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => (dispatch(receiveSessionErrors(err.responseJSON))))

)};

export const login = formUser => dispatch => (
    sessionUtils.postSession(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => (dispatch(receiveSessionErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
    sessionUtils.deleteSession()
        .then(() => dispatch(logoutCurrentUser()))
);

