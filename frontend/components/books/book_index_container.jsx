import { connect } from 'react-redux';
import BookIndex from './book_index';

const msp = state => ({
    books: Object.values(state.entities.searchBooks)
});

export default connect(msp)(BookIndex);