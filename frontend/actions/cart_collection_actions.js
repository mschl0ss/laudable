import { addToCart, getCartBooks } from '../utils/cart_collection_utils';
import * as sessionActions from '../actions/session_actions'

export const RECEIVE_CART_BOOKS = 'RECEIVE_CART_BOOKS';

const receiveCartBooks = cartBooks => ({
    type: RECEIVE_CART_BOOKS,
    cartBooks
})

export const fetchCartBooks = userId => dispatch (
    getCartBooks(userId)
        .then(books => dispatch(receiveCartBooks(books)))
)
export const addBookToCart = (userId,bookId) => dispatch => (
    addToCart(userId, bookId)
        .then(user => dispatch(sessionActions.receiveCurrentUser(user)))
)


