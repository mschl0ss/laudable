import { connect } from 'react-redux';
import CategoryShow from './category_show';
import { getTargetCategories, getBookCount} from '../../reducers/selectors';
import { fetchCategory, fetchCategories } from '../../actions/category_actions';
import { fetchBooks, fetchSearchResults, receiveQueryString  } from '../../actions/book_actions';



const msp = (state,ownProps) => ({
    children: getTargetCategories(state, 'children', ownProps.match.params.categoryId),
    parent: getTargetCategories(state, 'parent',ownProps.match.params.categoryId),
    siblings: getTargetCategories(state, 'siblings', ownProps.match.params.categoryId),
    category: state.entities.categories[ownProps.match.params.categoryId],
    searchResults: Object.values(state.entities.searchBooks),
    bookCount: getBookCount(state, ownProps.match.params.categoryId)
})

const mdp = dispatch => ({
    fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchBooks: () => dispatch(fetchBooks()),
    fetchSearchResults: query => dispatch(fetchSearchResults(query)),
    receiveQueryString: queryString => dispatch(receiveQueryString(queryString)),
});

export default connect(msp,mdp)(CategoryShow);