import React from 'react';
import ReviewIndexItemContainer from './review_index_item_container';
import {Link} from 'react-router-dom'

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            bookId: 0,
        }
    }

    componentDidMount() {
        // debugger;
        this.props.fetchReviews(this.props.bookId);
    }
    componentDidUpdate(prevProps){
        console.log(this)
        if (this.state.bookId !== this.props.bookId) {
            console.log(this)
            this.props.clearReviews();
            this.props.fetchReviews(this.props.bookId);
            this.setState({reviews: this.props.reviews})
            this.setState({bookId: this.props.bookId})
         }
    }

    render() {
        // debugger;
        
        const reviews = this.props.reviews.map((review, i) => (
            <ReviewIndexItemContainer key={i} review={review} userId={review.userId}/>
        ));
        return (
            <section className="review-index"> 
                <h3>What members say</h3>
                {reviews.length ? reviews : <h6>Be the first!</h6>}
            </section>
        )
    }
}

export default ReviewIndex;