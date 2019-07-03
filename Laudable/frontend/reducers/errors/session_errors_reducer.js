import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session_actions';



export default (state = [], action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // debugger
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        //if returned undefined, add case for receive current user

        default:
            return state;
    }
}