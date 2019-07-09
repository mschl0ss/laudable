import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import ReviewIndexItem from './review_index_item';

const msp = (state, ownProps ) => ({
    user: state.entities.users[ownProps.userId]
});

const mdp = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(msp,mdp)(ReviewIndexItem);