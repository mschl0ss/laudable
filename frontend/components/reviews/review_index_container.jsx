import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, clearReviews, voteReview } from '../../actions/review_actions';
import { getBookReviews } from '../../reducers/selectors';

const msp = (state,ownProps) => {
    // debugger;
    return ({
    bookId: ownProps.bookId,
    reviews: getBookReviews(state,ownProps.bookId)
})};

const mdp = dispatch => ({
    fetchReviews: bookId => dispatch(fetchReviews(bookId)),
    clearReviews: () => dispatch(clearReviews()),
    voteReview: (reviewId, vote) => dispatch(voteReview(reviewId, vote))
});

export default connect(msp,mdp)(ReviewIndex);