import { connect } from 'react-redux';

import { login, clearSessionErrors } from '../../actions/session_actions';
import Login from './login';

const msp = state =>  ({
    errors: state.errors.session,
    formType: 'login'
})



const mdp = dispatch => {
    const guest = { username: 'Guest', password: 'guestpassword' }
    return ({
        processForm: formUser => dispatch(login(formUser)),
        loginGuestUser: () => dispatch(login(guest)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
    });
}

export default connect(msp, mdp)(Login);



    