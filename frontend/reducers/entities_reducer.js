import { combineReducers } from 'redux';

import usersReducer from './entities/users_reducer';
import categoriesReducer from './entities/categories_reducer';

export default combineReducers({
    users: usersReducer,
    categories: categoriesReducer,
});