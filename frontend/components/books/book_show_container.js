import { connect } from 'react-redux';

import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { fetchContentCreators } from '../../actions/content_creator_actions';
import { fetchCategory, fetchCategories } from '../../actions/category_actions';
import { fetchBookCategories } from '../../actions/book_category_actions';
import { getBookAuthor, getBookNarrator, getBookCategories } from '../../reducers/selectors';
import { getBookReviewScores } from '../../reducers/selectors';
import { receiveTempReviewObj, receiveHelperProps,clearTempReviewObj } from '../../actions/temp_review_actions';




const msp = (state,ownProps) => ({
    book: state.entities.books[ownProps.match.params.bookId],
    author: getBookAuthor(state, ownProps.match.params.bookId),
    narrator: getBookNarrator(state, ownProps.match.params.bookId),
    categories: getBookCategories(state, ownProps.match.params.bookId),
    reviewScores: getBookReviewScores(state, ownProps.match.params.bookId),
    currentUser: state.session.currentUser,
    
});

const mdp = dispatch => {
    // debugger;
    return ({
        fetchBook: bookId => dispatch(fetchBook(bookId)),
        fetchContentCreators: () => dispatch(fetchContentCreators()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
        fetchBookCategories: bookId => dispatch(fetchBookCategories(bookId)),
        receiveTempReviewObj: temp => dispatch(receiveTempReviewObj(temp)),
        receiveHelperProps: helpers => dispatch(receiveHelperProps(helpers)),
        clearTempReviewObj: () => dispatch(clearTempReviewObj()), 

    })
}

export default connect(msp,mdp)(BookShow);