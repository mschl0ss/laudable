import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';
import { fetchSearchResults, receiveQueryString } from '../../actions/book_actions';

const msp = state => ({
    searchResults: Object.values(state.entities.searchBooks),
    currentUser: state.session.currentUser,
});

const mdp = dispatch => ({
    fetchSearchResults: query => dispatch(fetchSearchResults(query)),
    receiveQueryString: queryString => dispatch(receiveQueryString(queryString)),
});

export default withRouter(connect(msp,mdp)(SearchBar));