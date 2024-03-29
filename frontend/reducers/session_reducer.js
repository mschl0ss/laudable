import * as sessionActions from '../actions/session_actions';

const _nullSession = {
    currentUser: null
}

export default (state = _nullSession, action) => {
    Object.freeze(state);

    switch(action.type) {
        case sessionActions.RECEIVE_CURRENT_USER:
            return Object.assign( {}, { currentUser: action.user});
        case sessionActions.LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};