import { getCategories } from '../utils/category_utils';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';


const receiveAllCategories = categories => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
});


export const fetchCategories = () => dispatch => (
    getCategories()
        .then(categories => dispatch(receiveAllCategories(categories)))
);