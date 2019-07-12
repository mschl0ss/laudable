import React from 'react';
import { Link } from 'react-router-dom';

const ImageSlide = ({books, slideStyle}) => {

    const bookDivs = books.map((book,i) => {
        const thisStyle = {
            backgroundImage: `url("${book.bookCoverUrl}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return (
            <Link to={`/books/${book.id}`} key={i}><div style={thisStyle} ></div></Link>
        )
    })
   
    return (
        <div className="image-slide" style={slideStyle}>
            {bookDivs}
        </div>
    )
}

export default ImageSlide;