import { RECEIVE_QUERY_STRING} from '../../actions/book_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_QUERY_STRING:
            return action.queryString;
        default:
            return state;
    }
}