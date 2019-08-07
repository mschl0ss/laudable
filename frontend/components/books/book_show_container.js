import { connect } from 'react-redux';

import BookShow from './book_show';
import { fetchBook, fetchSearchByAuthorResults } from '../../actions/book_actions';
import { getBookReviewScores } from '../../reducers/selectors';
import { receiveTempReviewObj, receiveHelperProps,clearTempReviewObj } from '../../actions/temp_review_actions';





const msp = (state,ownProps) => ({
    book: state.entities.books[ownProps.match.params.bookId],
    reviewScores: getBookReviewScores(state, ownProps.match.params.bookId),
    currentUser: state.session.currentUser,
    
});

const mdp = dispatch => {
    // debugger;
    return ({
        fetchBook: bookId => dispatch(fetchBook(bookId)),
        receiveTempReviewObj: temp => dispatch(receiveTempReviewObj(temp)),
        receiveHelperProps: helpers => dispatch(receiveHelperProps(helpers)),
        clearTempReviewObj: () => dispatch(clearTempReviewObj()), 
        fetchSearchByAuthorResults: authorId => dispatch(fetchSearchByAuthorResults(authorId)),
        

    })
}

export default connect(msp,mdp)(BookShow);