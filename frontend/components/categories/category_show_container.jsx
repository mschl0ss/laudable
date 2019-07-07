import { connect } from 'react-redux';
import CategoryShow from './category_show';
import { 
    getChildCategories,
    getParentCategory, 
    getSiblingCategories } from '../../reducers';
import { fetchCategory, fetchCategories } from '../../actions/category_actions'
import {withRouter} from 'react-router-dom';


const msp = (state,ownProps) => ({
    children: getChildCategories(state, ownProps.match.params.categoryId),
    parent: getParentCategory(state, ownProps.match.params.categoryId),
    siblings: getSiblingCategories(state, ownProps.match.params.categoryId),
})

const mdp = dispatch => ({
    fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
    fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(msp,mdp)(CategoryShow);