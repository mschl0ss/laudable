export const getCategories = () => (
    $.ajax ({
        method: 'GET',
        url: '/api/categories'
    })
);