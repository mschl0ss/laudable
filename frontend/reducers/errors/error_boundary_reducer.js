import { RECEIVE_EB_ERRORS } from '../../actions/error_boundary_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EB_ERRORS:
            return action.errors;
        default:
            return state;
            
    }

}