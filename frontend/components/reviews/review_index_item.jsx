import React from 'react';

class ReviewIndexItem extends React.Component {
   constructor(props) {
       super(props);

       this.state = {
           review: {
               title: '', ratingOverall: 0, ratingPerformance: 0, ratingStory: 0, createdAt: '',
               helpfulVoteCount: 0, totalVoteCount: 0, body: ''
           }
       }
   }

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if(this.state.review.title !== this.props.review.title ){
            this.setState({ review: this.props.review})
        }
    }
    renderStars (score) {
        let stars = "";
        const star = "\u2605"
        for (let i = 0; i<score; i++) stars += star;
        return stars;
    }

    voteReview(vote) {
        this.props.voteReview(this.props.reviewId, vote);
    }

    render () {
        const blankReview = {
            title:'',ratingOverall:0,ratingPerformance:0,ratingStory:0,createdAt:'',
             helpfulVoteCount: 0, totalVoteCount: 0, body: ''}
        const blankUser = { username:'', city:'', state:''}

        const review = this.state.review
        const user = this.props.user ? this.props.user : blankUser;
        const date = new Date(review.createdAt);
        const body = review.body.split('\n').map((p, i) => (
            <p key={i}>{p}</p>)
        )
        // debugger;
        return (

            <div className="review">
                <aside>
                    <div className="ratings">
                        <ul className="labels">
                            <li>Overall</li>
                            <li>Performance</li>
                            <li>Story</li>
                        </ul>
                        <ul className="stars">
                            {/* <li>{review.ratingOverall}</li> */}
                            <li>{this.renderStars(review.ratingOverall)}</li>
                            <li>{this.renderStars(review.ratingPerformance)}</li>
                            <li>{this.renderStars(review.ratingStory)}</li>
                        </ul>
                    </div>
                    <h6 className="username">{user.username}</h6>
                    <h6 className="location">{user.city},{user.state}</h6>
                    <h6 className="date">
                        {date.getMonth()}-{date.getDay()}-{(date.getYear() + 1900) % 100}
                    </h6>
                </aside>
                <main>
                    <h1>{review.title}</h1>
                    <div className="review-body">
                        {body}
                    </div>
                    <footer>
                        <h5>Was this review helpful for you?</h5>
                        <div className="buttons">
                            <button>Helpful</button>
                            <button>Not Helpful</button>
                        </div>
                        <h6>{review.helpfulVoteCount} of {review.totalVoteCount} found this review helpful</h6>
                    </footer>
                </main>
            </div>
        )
    }
}

export default ReviewIndexItem;