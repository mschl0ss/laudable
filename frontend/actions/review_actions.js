// import { getReviews, postReview } from '../utils/review_utils';
import * as ReviewUtils from '../utils/review_utils';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';
export const VOTE_REVIEW = 'UPDATE_REVIEW'

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const clearReviews = ()=> ({
    type: CLEAR_REVIEWS,
});

export const fetchReviews = bookId => dispatch => (
    ReviewUtils.getReviews(bookId)
        .then(reviews => dispatch(receiveReviews(reviews)))
);

export const postReview = (bookId, review) => dispatch => (
    ReviewUtils.postReview(bookId, review)
        .then(review => dispatch(receiveReview(review)))
);

export const voteReview = (reviewId, vote) => dispatch => (
    ReviewUtils.voteReview(reviewId,vote)
        .then((review) => dispatch(receiveReview(review)))
)