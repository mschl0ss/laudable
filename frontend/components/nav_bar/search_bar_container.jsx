import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';
import { fetchSearchResults } from '../../actions/book_actions';

const msp = state => ({
    searchResults: Object.values(state.entities.searchBooks)
});

const mdp = dispatch => ({
    fetchSearchResults: query => dispatch(fetchSearchResults(query))
});

export default withRouter(connect(msp,mdp)(SearchBar));