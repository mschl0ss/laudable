export const getBookCategories = () => (
    $.ajax({
        method: 'get',
        url: '/api/book_categories'
    })
);