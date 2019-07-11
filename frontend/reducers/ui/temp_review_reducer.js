import { combineReducers } from 'redux';
import {RECEIVE_TEMP_REVIEW_OBJ,CLEAR_TEMP_REVIEW_OBJ, RECEIVE_HELPER_PROPS} from '../../actions/temp_review_actions';

const reviewObj = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TEMP_REVIEW_OBJ:
            return action.temp;
        case CLEAR_TEMP_REVIEW_OBJ:
            return {};
        default:
            return state;

    }
}

const helperProps = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_HELPER_PROPS:
            return action.helpers;
        default :
            return state;
    }
}

export default combineReducers({
    reviewObj: reviewObj,
    helperProps: helperProps,
})