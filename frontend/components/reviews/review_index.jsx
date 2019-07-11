import React from 'react';
import ReviewIndexItemContainer from './review_index_item_container';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){

        if (prevProps.bookId !== this.props.bookId) {
            this.props.fetchReviews(this.props.bookId);
         }
    }

    render() {

        const reviews = this.props.reviews.map((review, i) => (
            <ReviewIndexItemContainer key={i} review={review} userId={review.userId}/>
        ));
        return(
            <section>
                {reviews}
            </section>
        )
    }
}

export default ReviewIndex;