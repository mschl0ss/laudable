import { addToCart } from '../utils/cart_collection_utils';
import * as userActions from '../actions/user_actions'

export const addBookToCart = (userId,bookId) => dispatch => (
    addToCart(userId, bookId)
        .then(user => dispatch(userActions.receiveUser(user)))
)


