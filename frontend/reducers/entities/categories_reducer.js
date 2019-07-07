import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../../actions/category_actions';
import { merge } from 'lodash';

export default (state = {}, action ) => {
    Object.freeze(state);

    switch(action.type ) {
        case RECEIVE_ALL_CATEGORIES:
            return action.categories;
        case RECEIVE_CATEGORY:
            return merge( {}, state, { [action.category.id]: action.category });

        default:
            return state;
    }
}