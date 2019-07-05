import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

import Splash from './splash';

const msp = state => ({
    currentUser: state.session.currentUser,
});

const mdp = dispatch => {
    const guest = { username: 'Guest', password: 'guestpassword' }
    return ({
        loginGuestUser: () => dispatch(login(guest)),
    });
}

export default connect (msp,mdp)(Splash);