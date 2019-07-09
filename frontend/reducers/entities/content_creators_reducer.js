import { RECEIVE_ALL_CONTENT_CREATORS, RECEIVE_CONTENT_CREATOR } from '../../actions/content_creator_actions';
import { merge } from 'lodash';

export default (state = {}, action ) => {
    Object.freeze(state);
    // debugger;
    switch(action.type) {
        case RECEIVE_ALL_CONTENT_CREATORS:
            return action.contentCreators;
        case RECEIVE_CONTENT_CREATOR:
            return merge({},state, { [action.contentCreator.id]: action.contentCreator});
        default:
            return state;
    }
}