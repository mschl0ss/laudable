import React from 'react';
import { connect } from 'react-redux';
import Main from './main';

const msp = state => ({
    currentUser: state.session.currentUser
})

export default connect(msp)(Main)