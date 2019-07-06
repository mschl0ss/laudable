import { connect } from 'react-redux';
import CategoryIndex from './categories_index';
import { fetchCategories } from '../../actions/category_actions';

const msp = state => ({
    categories: Object.values(state.entities.categories)
})
const mdp = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
})

export default connect(msp,mdp)(CategoryIndex);