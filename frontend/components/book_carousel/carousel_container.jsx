import {connect } from 'react-redux';
import Carousel from './carousel';
import { fetchBooks } from '../../actions/book_actions';

const msp = state => ({
    books: Object.values(state.entities.books),
});

const mdp = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks()),
})

export default connect(msp, mdp)(Carousel);