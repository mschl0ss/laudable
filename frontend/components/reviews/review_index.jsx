import React from 'react';
import ReviewIndexItemContainer from './review_index_item_container';
import {Link} from 'react-router-dom'

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.bookId);
    }
    componentDidUpdate(prevProps){

        if (prevProps.bookId !== this.props.bookId) {
            this.props.clearReviews();
            this.props.fetchReviews(this.props.bookId);
            this.setState({reviews: this.props.reviews})
         }
    }

    render() {

        const reviews = this.props.reviews.map((review, i) => (
            <ReviewIndexItemContainer key={i} review={review} userId={review.userId}/>
        ));
        return(
            <section className="review-index"> 
                <h3>What members say</h3>
                {reviews.length ? reviews : <h6>Be the first!</h6>}
            </section>
        )
    }
}

export default ReviewIndex;