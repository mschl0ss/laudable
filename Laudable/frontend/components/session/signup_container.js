import { connect } from 'react-redux';

import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';

const msp = state => ({
    errors: state.errors.session
})


const mdp = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect (msp, mdp)(Signup);