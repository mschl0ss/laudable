import { RECEIVE_SAMPLE_FORM } from '../../actions/redux_demo_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SAMPLE_FORM:
            return action.formData;
        default:
            return state;
    }
}