import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER } from '../../actions/user_actions';
import { merge } from "lodash";


export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.user;
        case RECEIVE_USER:
            return merge ( {}, state, {[action.user.id]:action.user})
        default:
            return state;
    }
}
