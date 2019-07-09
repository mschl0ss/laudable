import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';
import { getBookReviews } from '../../reducers/selectors';

const msp = (state,ownProps) => ({
    reviews: getBookReviews(state,ownProps.bookId)
});

const mdp = dispatch => ({
    fetchReviews: bookId => dispatch(fetchReviews(bookId))
});

export default connect(msp,mdp)(ReviewIndex);