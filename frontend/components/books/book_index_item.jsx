import React from 'react';
import { Link } from 'react-router-dom';




export default (props) => {

    const book = props.book;

    const length = `${Math.floor(book.lengthInMinutes / 60)} hrs 
                    and ${book.lengthInMinutes % 60} mins`;

    const computeDate = () => {
        const numbers = props.book.releaseDate.split("-");
        return `${numbers[1]}-${numbers[2]}-${numbers[0].slice(2, 4)}`;
    }


    return(

        <div className="book-index-item">
            <figure>
                <img src={book.bookCoverUrl} />
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
                <li>{book.totalReviews} ratings</li>
            </ul>


        </div>
    )
}