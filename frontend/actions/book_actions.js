import { getBook, getBooks, searchBooks } from '../utils/book_utils';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_SEARCH_BOOKS = 'RECEIVE_SEARCH_BOOKS';


const receiveBooks = books => ({
    type: RECEIVE_BOOKS,
    books
});

const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

const receiveSearchBooks = books => ({
    type: RECEIVE_SEARCH_BOOKS,
    books
});

export const fetchBooks = () => dispatch => (
    getBooks()
        .then(books => dispatch(receiveBooks(books)))
);

export const fetchBook = bookId => dispatch => (
    getBook(bookId)
        .then(book => dispatch(receiveBook(book)))
);

export const fetchSearchResults = query => dispatch => (
    searchBooks(query)
        .then(books => dispatch(receiveSearchBooks(books)))
)