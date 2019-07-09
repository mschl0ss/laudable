import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Carousel from '../book_carousel/carousel';

class BookShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                authorId: 1,
                narratorId: 1,
                title: '',
                subtitle: '',
                publisherSummary: '',
                releaseDate: '1/1/2001',
                lengthInMinutes: 100,
                priceInCents: 100,
                language: 'Hebrew',
                publisher: '',
            },
            author: {
                fname: 'john',
                lname: 'smith',
            },
            narrator: {
                fname: 'jane',
                lname: 'doe'
            }
        }
    }

    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId)
        this.props.fetchContentCreators();
    }

    computeLength(lengthInMinutes) {
        const hours = Math.floor(lengthInMinutes / 60);
        const minutes = lengthInMinutes % 60;
        return `${hours} hours and ${minutes} mins`;
    }
 
    computeDate(date) {
        const numbers = date.split("-");
        const year = numbers[0].slice(2,4);
        const month = numbers[1];
        const day = numbers[2];
        return `${month}-${day}-${year}`;
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

        let newText = publisherSummary.split('\n').map( (p,i) => {
            let css = p[0] === '©' ? 'bottom': '';
            return (
                <p key={i} className={css}>{p}</p>
            )
        })
        return newText;
    }
    render () {
 
        const book = this.props.book ? this.props.book : this.state.book;
        const author = this.props.author ? this.props.author : this.state.author;
        const narrator = this.props.narrator ? this.props.narrator : this.state.narrator;
        

        return (
            <section className="book-show-container">
                {/* {book.bookCoverUrl}
                <img src={book.bookCoverUrl} /> */}
                <header>

                    <aside className="categories">
                        Parent > Child
                    </aside>

                    <section className="left-column">
                        <figure>
                            <img src="https://cdn.waterstones.com/bookjackets/large/9781/8724/9781872405537.jpg" />
                            <div className="gray-bar"></div>
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
                            <li>Language: {book.language}</li>
                            <li>Publisher: {book.publisher}</li>
                        </ul>

                    </section>

                    <section className="right-column">
                        <p>Regular Price: <span className="strikethrough">{this.computeCost(book.priceInCents)}</span></p>
                        <p className="strong">Member Price: {this.computeDiscountedCost(book.priceInCents)}</p>
                        
                        <div className="buttons">
                            <button className="orange-button">Buy Now with Credit</button>
                            <button className="gray-button">Buy Now with Money</button>
                        </div>

                        <div className="divider">
                            OR
                        </div>

                        <div className="buttons">
                            <button className="orange-button">Add to Cart</button>
                            <button className="gray-button">Add to Wishlist</button>
                        </div>

                    </section>

                </header>

                <main>

                    <div className="carousel-wrapper">
                        <h3>People who bought this also bought...</h3>
                        <Carousel />
                    </div>

                    <div className="publisher-summary">
                        {this.computePublisherSummary(book.publisherSummary)}
                    </div>
                </main>
            </section>
        )
    }
}

export default BookShow;