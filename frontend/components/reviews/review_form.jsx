import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            review: {},
            helperProps: {},
            titleDisabled: true,
            submitDisabled: true,
            bodyDisabled: true,
            previewForm: false
        }
        

        // this.renderReviewStars = this.props.location.state.renderReviewStars.bind(this);
        this.renderStars = this.renderStars.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateReview = this.updateReview.bind(this);

    }

    componentDidMount() {
        this.setState({ review: this.props.reviewObj});
        this.setState({ helperProps: this.props.helperProps});


    }

    componentDidUpdate(prevProps) {
        const review = this.state.review;

        let access = 0;

        access = review.ratingOverall > 0 ? access + 1 : access;
        access = review.ratingPerformance > 0 ? access + 1 : access;
        access = review.ratingStory > 0 ? access + 1 : access;

        if (access === 3 && this.state.titleDisabled === true) this.setState({ titleDisabled: false })
        
    }
    componentDidCatch(error, info) {
        debugger;
    }
    updateReview(field) {

        return (e) => {
            const review = Object.assign({}, this.state.review);
            review[field] = e.currentTarget.value;
            this.setState({ review: review })
            
            if (review.body.length > 25 ) this.setState( {submitDisabled: false});
            if (review.title.length > 0) this.setState({ bodyDisabled: false });
            if (parseInt(review.ratingOverall) > 0 && parseInt(review.ratingPerformance) >0 && parseInt(review.ratingStory) > 0 ) {
                this.setState({ titleDisabled: false });
            }
      
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state.review);
        review.userId = this.props.currentUser.id;
        this.setState({ review: review })
        
        this.props.postReview(this.state.review.bookId, this.state.review)
            .then(() => this.props.history.push(`/books/${this.state.review.bookId}`));
    }
    renderReviewStars() {
        const star = "\u2605";
           
        const ratingOverall = [1, 2, 3, 4, 5].map(i => (
            <li key={i}>
                <label>
                    <input type="radio" name="ratingOverall" value={i}
                        checked={this.state.review.ratingOverall === i}
                        onChange={this.updateReview('ratingOverall')}
                    />
                    <span className={i <= this.state.review.ratingOverall ? "gold" : "gray"}>{star}</span>
                </label>
            </li>
        ))
        const ratingPerformance = [1, 2, 3, 4, 5].map(i => (
            <li key={i}>
                <label>
                    <input type="radio" name="ratingPerformance" value={i}
                        onChange={this.updateReview('ratingPerformance')}
                        checked={this.state.review.ratingOverall === i}
                    />
                    <span className={i <= this.state.review.ratingPerformance ? "gold" : "gray"}>{star}</span>
                </label>
            </li>
        ))
        const ratingStory = [1, 2, 3, 4, 5].map(i => (
            <li key={i}>
                <label>
                    <input type="radio" name="ratingStory" value={i}
                        onChange={this.updateReview('ratingStory')}
                        checked={this.state.review.ratingOverall === i} />
                    <span className={i <= this.state.review.ratingStory ? "gold" : "gray"}>{star}</span>
                </label>
            </li>
        ))
        return (
            <div className="review-stars-container">
                <div>
                    <span className="label">Overall</span>
                    <ul>
                        {ratingOverall}
                    </ul>
                </div>
                <div>
                    <span className="label">Performance</span>
                    <ul>
                        {ratingPerformance}
                    </ul>
                </div>
                <div>
                    <span className="label">Story</span>
                    <ul>
                        {ratingStory}
                    </ul>
                </div>

            </div>
        )
    }
    renderStars(score) {
        const star = "\u2605";
        return [1,2,3,4,5].map(i => (
            
                <span key={i} className={i <= score ? 'gold' : 'gray'}>{star}</span>
            
        ))
    }
    renderPreview() {
        // debugger;
        const d = new Date();

        // const body = review.body.split('\n').map((p, i) => (
        //     <p key={i}>{p}</p>)
        return (
            <main className="preview-form">
                <aside>
                    <div>
                        <ul>
                            <li>
                                <span className="label">Overall</span>
                                <div>{this.renderStars(this.state.review.ratingOverall)}</div>
                            </li>
                            <li>
                                <span className="label">Performance</span>
                                <div>{this.renderStars(this.state.review.ratingPerformance)}</div>
                            </li>
                            <li>
                                <span className="label">Story</span>
                                <div>{this.renderStars(this.state.review.ratingStory)}</div>
                            </li>
                        
                        </ul>
                    </div>
                    <h5>{this.props.currentUser.username}</h5>
                    <h6>{d.getMonth()}-{d.getDay()}-{d.getYear() - 100}</h6>
                </aside>

                <section>
                    <h1>{this.state.review.title}</h1>
                    <p>{this.state.review.body}</p>
                </section>
                

            </main>
        )
    }
    render () {
        if(this.state.helperProps.book === undefined ) return null;
        // debugger;
        return(
            <section className="review-form-container">

                <header>
                    <h1>Write a Review</h1>
                    <div>
                        {/* <img src="https://cdn.waterstones.com/bookjackets/large/9781/8724/9781872405537.jpg" /> */}
                        <img src={this.state.helperProps.book.bookCoverUrl} />
                    

                        <section className="book-details">
                            <h1>{this.state.helperProps.book.title}</h1>
                            <h3>{this.state.helperProps.book.subtitle}</h3>

                            <p>By: {this.state.helperProps.author}</p>
                            <p>Narrated By: {this.state.helperProps.narrator}</p>
                            <p>Length: {this.state.helperProps.computeLength(this.state.helperProps.book.lengthInMinutes)}</p>
                            <p>{this.state.helperProps.avgReviewScoreStars} 
                                &nbsp;{this.state.helperProps.cumulutiveAvg === "NaN" ? 0 : this.state.helperProps.cumulutiveAvg} 
                            &nbsp;&#40; {this.state.helperProps.totalReviewVotes} ratings&#41;</p>
                        </section>
                    </div>
                </header>

                <form onSubmit={this.handleSubmit}>

                {this.state.previewForm ? this.renderPreview() : null}
                <main className={this.state.previewForm ? "hidden" : "review-form"}>
                    {/* PICK STARS */}
                    <section>
                        <h4>1. Please rate this title</h4>
                        {this.renderReviewStars()}
                    </section>

                    {/* ENTER TITLE */}
                    <section>
                        <h4>2. Enter a headline for your review</h4>
                        <input type="text"
                            id="review-form-title-input"
                            disabled={this.state.titleDisabled ? true : false}
                            className={this.state.titleDisabled ? "disabled" : ""}
                            value={this.state.review.title}
                            placeholder="Enter text here"
                            onChange={this.updateReview('title')}/>
                        <h6>maximum 50 characters</h6>
                    </section>

                    {/* ENTER BODY */}
                    <section>
                        <h4>3. Review this title</h4>
                        <textarea 
                            id="review-form-body-input"
                            disabled={this.state.bodyDisabled ? true : false}
                            className={this.state.bodyDisabled ? "disabled" : ""}
                            value={this.state.review.body}
                            placeholder="Enter text here" 
                            onChange={this.updateReview('body')}></textarea>
                        <h6>minimum 15 words and 25 characters</h6>
                    </section>

                    <p>Please note: Laudable posts reviews at its discretion.  It has discretion.  It will apply it wantonly. All the submitted reviews
                        become the property of it and its discretion.  In all cases, reviews will be processed lightning quick, baby.
                    </p>
                </main>

                    <div className="buttons">
                        <button type="button" className="gray-button"
                            onClick={this.state.previewForm ? 
                                () => this.setState({ previewForm: false }) :
                                ()=>this.props.history.push(`/books/${this.state.review.bookId}`)}
                        >
                        {this.state.previewForm ? "Edit" : "Cancel"}
                        </button>
                        <button 
                            className={this.state.submitDisabled ? "orange-button disabled" : "orange-button"}
                            onClick={this.state.submitDisabled ? null : 
                                this.state.previewForm ? 
                                this.handleSubmit :
                                () => this.setState({ previewForm: true })}
                            type="button"
                            >
                            {this.state.previewForm ? "Submit" : "Preview"}
                        </button>
                    </div>

                    </form>
                
            </section>
        )
    }
    
}

export default ReviewForm;

// /() => this.props.postReview(this.props.currentUser.id, this.state.review) :