// export const getBookCategories = bookId => (
//     $.ajax({
//         method: 'get',
//         url: '/api/book_categories'
//     })
// );

export const getBookCategories = bookId => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/book_categories`
    })
);