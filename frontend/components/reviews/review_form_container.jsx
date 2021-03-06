import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {postReview} from '../../actions/review_actions';

const msp = state => ({
    currentUser: state.session.currentUser,
    helperProps: state.ui.tempReview.helperProps,
    reviewObj: state.ui.tempReview.reviewObj,
})

const mdp = dispatch => ({
    postReview: (bookId, review) => dispatch(postReview(bookId,review))
});

export default connect(msp,mdp)(ReviewForm);