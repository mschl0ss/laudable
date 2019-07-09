// import { getReviews, postReview } from '../utils/review_utils';
import * as ReviewUtils from '../utils/review_utils';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const fetchReviews = bookId => dispatch => (
    ReviewUtils.getReviews(bookId)
        .then(reviews => dispatch(receiveReviews(reviews)))
);

export const postReview = (bookId, review) => dispatch => (
    ReviewUtils.postReview(bookId, review)
        .then(review => dispatch(receiveReview(review)))
);