import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import { getBookReviewScores } from '../../reducers/selectors';


const msp = (state,ownProps) => ({
    reviewScores: getBookReviewScores(state, ownProps.book.id),
})


const indexItem = (props) => {

    const book = props.book;

    const length = `${Math.floor(book.lengthInMinutes / 60)} hrs 
                    and ${book.lengthInMinutes % 60} mins`;

    const computeDate = () => {
        const numbers = props.book.releaseDate.split("-");
        return `${numbers[1]}-${numbers[2]}-${numbers[0].slice(2, 4)}`;
    }
    const renderOverallReviewAverage = function (score,votes) {

        let cumulutiveAvg = Math.floor(score / votes);
        if (votes === 0) cumulutiveAvg = 0;
        const stars = [];
        const star = "\u2605"
        for (let i = 0; i < 5; i++) {
            const className = i < cumulutiveAvg ? 'gold' : 'gray';
            stars.push(<span className={className} key={i}>{star}</span>)
        }
        return stars;

    }
 
    return(

        <div className="book-index-item">
            <figure>
                <Link to={`/books/${book.id}`} >
                    <img src={book.bookCoverUrl} />
                </Link>
                <figcaption className="gray-bar"></figcaption>
            </figure>

            <ul>
                <li className="title">
                    <Link to={`/books/${book.id}`} >{book.title}</Link>
                </li>
                <li>By: {book.author}</li>
                <li>Narrated By: {book.narrator}</li>
                <li>Length: {length}</li>
                <li>Release date: {computeDate()}</li>
                <li>
                    {renderOverallReviewAverage(props.book.overallTotal, props.book.overallVotes)}
                    &nbsp;{book.totalReviews} ratings
                </li>
            </ul>


        </div>
    )
}

export default connect(msp)(indexItem);