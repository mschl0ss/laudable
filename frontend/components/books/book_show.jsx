import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewFormContainer from '../reviews/review_form_container';

import Carousel from '../book_carousel/carousel';

class BookShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: { authorId: 1, narratorId: 1, title: '',
                subtitle: '', publisherSummary: '', releaseDate: '1/1/2001',
                lengthInMinutes: 100, priceInCents: 100, language: 'Hebrew',
                publisher: '',
            },
            author: { fname: 'john', lname: 'smith' },
            narrator: { fname: 'jane',  lname: 'doe' },
            category: { categoryName: '', id: 0},
            reviewScores: {
                ratingOverall: { totalScore: 0, votesCast: 0 },
                ratingPerformance: { totalScore: 0, votesCast: 0 },
                ratingStory: { totalScore: 0, votesCast: 0 },
            }
        }
    }

    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId);
        this.props.fetchContentCreators();
        this.props.fetchCategories();
        this.props.fetchBookCategories(this.props.match.params.bookId);
    }

    computeLength(lengthInMinutes) {
        const hours = Math.floor(lengthInMinutes / 60);
        const minutes = lengthInMinutes % 60;
        return `${hours} hours and ${minutes} mins`;
    }
 
    computeDate(date) {
        const numbers = date.split("-");
        return `${numbers[1]}-${numbers[2]}-${numbers[0].slice(2, 4)}`;
    }

    computeCost(priceInCents) {
        const dollars = Math.floor(priceInCents / 100).toFixed(0);
        const cents = (priceInCents % 100).toFixed(0);
        return `$${dollars}.${cents}`;
    }

    computeDiscountedCost(priceInCents) {
        const discounted = (priceInCents * 0.7);
        const dollars = Math.floor(discounted / 100).toFixed(0);
        const cents = (discounted % 100).toFixed(0);
        return `$${dollars}.${cents}`;
    }

    computePublisherSummary(publisherSummary) {
        return publisherSummary.split('\n').map( (p,i) => (
            <p key={i} className={p[0] === '©' ? 'bottom' : ''}>{p}</p>)
        )
    }

    renderOverallReviewAverage(ratingsOverall) {

        let cumulutiveAvg = Math.floor(ratingsOverall.totalScore / ratingsOverall.votesCast);
        if (ratingsOverall.votesCast === 0) cumulutiveAvg = 0;
        console.log(ratingsOverall);
        console.log(cumulutiveAvg);

        const stars = [];
        const star = "\u2605"
        for(let i=0; i < 5; i++) {
            const className = i < cumulutiveAvg ? 'gold' : 'gray';
            stars.push(<span className={className} key={i}>{star}</span>)
        }
        return stars;

    }
    renderBuy(book){
        return (
            <>
                <p className="weak">Regular Price: <span className="strikethrough">{this.computeCost(book.priceInCents)}</span></p>
                <p className="strong">Member Price: {this.computeDiscountedCost(book.priceInCents)}</p>

                <div className="buttons">
                    <button className="orange-button">Buy Now with Credit</button>
                    <button className="gray-button">Buy Now with Money</button>
                </div>

                <div className="divider">
                    <hr />
                    <span>OR</span>
                </div>

                <div className="buttons">
                    <button className="gray-button">Add to Cart</button>
                    <button className="gray-button">Add to Wishlist</button>
                </div>
            </>
        )
    }

    // renderReviewForm(book) {
    //     return(
    //         <div className="ratings">
    //             <ul className="labels">
    //                 <li>Overall</li>
    //                 <li>Performance</li>
    //                 <li>Story</li>
    //             </ul>
    //             <ul className="stars">
    //                 <li>{this.renderStars(review.ratingOverall)}</li>
    //                 <li>{this.renderStars(review.ratingPerformance)}</li>
    //                 <li>{this.renderStars(review.ratingStory)}</li>
    //             </ul>
    //         </div>
    //     )
    // }
    render () {
        const book = this.props.book ? this.props.book : this.state.book;
        const author = this.props.author ? this.props.author : this.state.author;
        const narrator = this.props.narrator ? this.props.narrator : this.state.narrator;
        const categories = this.props.categories.category ? 
            this.props.categories :
            {category: this.state.category, parentCategory: this.state.category };
        const reviewScores = this.props.reviewScores ? this.props.reviewScores : this.state.reviewScores;
        let cumulutiveAvg = (reviewScores.ratingOverall.totalScore / reviewScores.ratingOverall.votesCast).toFixed(1);
        if (reviewScores.ratingOverall.votesCast === 0) cumulutiveAvg = 0;
        
        return (
            <section className="book-show-container">
                {/* {book.bookCoverUrl}
                <img src={book.bookCoverUrl} /> */}
                <header>
                    <h6 className="categories">
                        <Link to={`/categories/${categories.parentCategory.id}`}>
                            {categories.parentCategory.categoryName}
                        </Link> 
                        <span>></span>
                        <Link to={`/categories/${categories.category.id}`}>
                            {categories.category.categoryName}
                        </Link> 
                    </h6>

                    <div className="columns">
                        <section className="left-column">
                            
                            <figure>
                                <img src="https://cdn.waterstones.com/bookjackets/large/9781/8724/9781872405537.jpg" />
                                {/* <img src="https://m.media-amazon.com/images/I/514mQYTQAkL._SL500_.jpg" /> */}
                                <figcaption className="gray-bar"></figcaption>
                            </figure>
                        </section>

                        <section className="middle-column book-details">
                            <h1>{book.title}</h1>
                            <h3>{book.subtitle}</h3>

                            <ul>
                                <li>By: {author.fname} {author.lname}</li>
                                <li>Narrated by: {narrator.fname} {narrator.lname}</li>
                                <li>Length: {this.computeLength(book.lengthInMinutes)}</li>
                                <li>Unabridged Audiobook</li>
                                <li>Release Date: {this.computeDate(book.releaseDate)}</li>
                                <li>Language: {book.language.charAt(0).toUpperCase() + book.language.slice(1)}</li>
                                <li>Publisher: {book.publisher}</li>
                                <li>
                                    {this.renderOverallReviewAverage(reviewScores.ratingOverall)}
                                    <span className="cumulutiveAvg">{cumulutiveAvg}</span>
                                    <span>&#40;
                                        <a href="#reviews">{reviewScores.ratingOverall.votesCast} ratings</a>
                                        &#41;</span>
                                    </li>
                            </ul>

                        </section>

                        <section className="right-column">
                           {this.renderBuy(book)}

                        </section>
                    </div>

                </header>

                <main>

                    <div className="carousel-section">
                        <h3>People who bought this also bought...</h3>
                        <Carousel />
                    </div>

                    <div className="publisher-summary">
                        <h3>Publisher Summary</h3>
                        {this.computePublisherSummary(book.publisherSummary)}
                    </div>

                    <section className="reviews" id="reviews">
                        <ReviewIndexContainer bookId={book.id}/>
                    </section>
                </main>
            </section>
        )
    }
}

export default BookShow;