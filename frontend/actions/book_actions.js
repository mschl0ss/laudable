import { getBook, getBooks } from '../utils/book_utils';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';


const receiveBooks = books => ({
    type: RECEIVE_BOOKS,
    books
});

const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

export const fetchBooks = () => dispatch => (
    getBooks()
        .then(books => dispatch(receiveBooks(books)))
);

export const fetchBook = bookId => dispatch => (
    getBook(bookId)
        .then(book => dispatch(receiveBook(book)))
);