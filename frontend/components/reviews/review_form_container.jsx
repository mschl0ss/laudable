import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {postReview} from '../../actions/review_actions';

const mdp = dispatch => ({
    postReview: (bookId, review) => dispatch(postReview(bookId,review))
});

export default connect(null,mdp)(ReviewForm);