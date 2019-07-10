import { RECEIVE_SEARCH_BOOKS } from '../../actions/book_actions';


export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_BOOKS:
            return action.books
        default:
            return state;
    }
}