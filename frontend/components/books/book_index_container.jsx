import { connect } from 'react-redux';
import BookIndex from './book_index';

const msp = state => ({
    books: Object.values(state.entities.searchBooks),
    allBooks: Object.values(state.entities.books),
    queryString: Object.values(state.ui.queryString).join(""),
});

export default connect(msp)(BookIndex);