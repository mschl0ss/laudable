import { RECEIVE_BOOK_CATEGORIES } from '../../actions/book_category_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOOK_CATEGORIES:
            return action.bookCategories;
        default:
            return state;
    }
}