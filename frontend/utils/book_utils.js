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

export const searchBooks = query => (
    $.ajax({
        url: '/api/books/search',
        dataType: 'json',
        method: 'GET',
        data: { query }
    })
);

export const searchBooksByAuthor = authorId => (
    $.ajax({
        url: '/api/books/search',
        dataType: 'json',
        method: 'GET',
        data: { query: {author_id: authorId }}
    })
);
