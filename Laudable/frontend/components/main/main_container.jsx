import React from 'react';
import { connect } from 'react-redux';
import Main from './main';
import { login } from '../../actions/session_actions';

const msp = state => ({
    currentUser: state.session.currentUser
})

const mdp = dispatch => {
    const guest = { username: 'Guest', password: 'guestpassword'}
    return ({
        loginGuestUser: () => dispatch(login(guest))
    })
}

export default connect(msp, mdp)(Main)