export const getCategories = () => (
    $.ajax ({
        method: 'GET',
        url: '/api/categories'
    })
);

export const getCategory = categoryId => (
    $.ajax ({
        method: 'GET',
        url: `/api/categories/${categoryId}`
    })
);

