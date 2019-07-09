export const getReviews = bookId => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/reviews`
    })
);

export const postReview = (bookId,review) => (
    $.ajax({
        method: 'post',
        url: `api/books/${bookId}/reviews`,
        data: {review}
    })
);