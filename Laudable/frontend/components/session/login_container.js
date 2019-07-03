import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import Login from './login';

const msp = state =>  ({
    errors: state.errors.session
})



const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
});

export default connect(msp, mdp)(Login);