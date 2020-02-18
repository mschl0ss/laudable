import { combineReducers } from 'redux';
import tempReviewReducer from './ui/temp_review_reducer';
import queryStringReducer from './ui/query_string_reducer';
import reduxDemoReducer from './ui/redux_demo_reducer';

export default combineReducers({
    tempReview: tempReviewReducer,
    queryString: queryStringReducer,
    reduxDemo: reduxDemoReducer,
});