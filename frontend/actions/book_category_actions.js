import { getBookCategories } from '../utils/book_category_utils';


export const RECEIVE_BOOK_CATEGORIES = 'RECEIVE_BOOK_CATEGORIES';

const receiveBookCategories = bookCategories => ({
    type: RECEIVE_BOOK_CATEGORIES,
    bookCategories
});


export const fetchBookCategories = bookId => dispatch => (
    getBookCategories(bookId)
        .then(bookCategories => dispatch(receiveBookCategories(bookCategories)))
);