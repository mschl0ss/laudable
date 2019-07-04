import { connect } from 'react-redux';

import { createNewUser, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const msp = state => ({
    errors: state.errors.session
})


const mdp = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect (msp, mdp)(Signup);