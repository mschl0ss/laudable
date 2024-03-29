import { getUser } from '../utils/user_utils';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = userId => dispatch => (
    getUser(userId)
        .then(user => dispatch(receiveUser(user)))
)