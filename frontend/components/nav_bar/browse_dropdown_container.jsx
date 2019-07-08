import React from 'react';
import { connect } from 'react-redux';
import BrowseDropDown from './browse_dropdown';
import { getTargetCategories } from '../../reducers/selectors';
import { fetchCategory, fetchCategories } from '../../actions/category_actions'

const msp = state => ({
    rootCategories: getTargetCategories(state, 'parents')
})

const mdp = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
})


export default connect (msp,mdp)(BrowseDropDown);