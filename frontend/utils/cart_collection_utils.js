

export const addToCart = (userId,bookId) => (
    $.ajax({
        method: 'post',
        url: `/api/users/${userId}/shopping_cart_books`,
        data: {book_id: bookId}
    })
)