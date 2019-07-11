import { combineReducers } from 'redux';
import tempReviewReducer from './ui/temp_review_reducer';



export default combineReducers({
    tempReview: tempReviewReducer,
})