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
        data: {
            review : {
                user_id: review.userId,
                title: review.title,
                body: review.body,
                review_type: review.reviewType,
                rating_overall: review.ratingOverall,
                rating_performance: review.ratingPerformance,
                rating_story: review.ratingStory,
                helpful_vote_count: review.helpfulVoteCount,
                total_vote_count: review.totalVoteCount,
            }
        }
    })
);