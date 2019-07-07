import { getCategories, getCategory } from '../utils/category_utils';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveAllCategories = categories => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
});

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
})


export const fetchCategories = () => dispatch => (
    getCategories()
        .then(categories => dispatch(receiveAllCategories(categories)))
);

export const fetchCategory = categoryId => dispatch => (
    getCategory(categoryId)
        .then(category => dispatch(receiveCategory(category)))
);