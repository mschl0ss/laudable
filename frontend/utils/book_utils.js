export const getBooks = () => (
    $.ajax({
        method: 'GET',
        url: `/api/books`
    })
);

export const getBook = bookId => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}`
    })
);

