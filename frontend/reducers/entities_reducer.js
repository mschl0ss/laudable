import { combineReducers } from 'redux';

import usersReducer from './entities/users_reducer';
import categoriesReducer from './entities/categories_reducer';
import booksReducer from './entities/books_reducer';
import contentCreatorsReducer from './entities/content_creators_reducer';
import bookCategoriesReducer from './entities/book_categories_reducer';

export default combineReducers({
    users: usersReducer,
    categories: categoriesReducer,
    books: booksReducer,
    contentCreators: contentCreatorsReducer,
    bookCategories: bookCategoriesReducer,
});