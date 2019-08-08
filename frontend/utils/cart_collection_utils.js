

export const addToCart = (userId,bookId) => (
    $.ajax({
        method: 'post',
        url: `/api/users/${userId}/shopping_cart_books`,
        data: {book_id: bookId}
    })
)

export const getCartBooks = (userId) => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}/shopping_cart_books`,
    })
)