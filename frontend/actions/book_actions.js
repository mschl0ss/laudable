import { getBook, getBooks, searchBooks, searchBooksByAuthor } from '../utils/book_utils';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_SEARCH_BOOKS = 'RECEIVE_SEARCH_BOOKS';
export const RECEIVE_QUERY_STRING = 'RECEIVE_QUERY_STRING';


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

export const receiveQueryString = queryString => ({
    type: RECEIVE_QUERY_STRING,
    queryString
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

export const fetchSearchByAuthorResults = authorId => dispatch => (
    searchBooksByAuthor(authorId)
        .then(books => dispatch(receiveSearchBooks(books)))
)