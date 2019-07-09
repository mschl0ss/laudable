import { RECEIVE_BOOK, RECEIVE_BOOKS } from '../../actions/book_actions';
import { merge } from 'lodash';

export default (state = {}, action ) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_BOOKS:
            return action.books;
        case RECEIVE_BOOK:
            return merge( {}, state, { [action.book.id]: action.book});
        default:
            return state;
    }
}