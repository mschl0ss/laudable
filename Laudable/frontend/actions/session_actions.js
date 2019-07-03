import * as sessionUtils from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//THE THUNKERINGS

export const createNewUser = formUser => dispatch => (
    sessionUtils.postUser(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => (dispatch(receiveErrors(err.responseJSON))))

);

export const login = formUser => dispatch => (
    sessionUtils.postSession(formUser)
        .then( user => dispatch(receiveCurrentUser(user)),
        err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
    sessionUtils.deleteSession()
        .then(() => dispatch(logoutCurrentUser()))
);

