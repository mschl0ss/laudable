import React from 'react';
import { Link } from 'react-router-dom';

import BookTease from '../books/book_tease'

class ImageSlide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teaseRender: true,
        }
    }
    render () {
        const bookDivs = this.props.books.map((book,i) => {
            const thisStyle = {
                backgroundImage: `url("${book.bookCoverUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
            return (
                <Link 
                    to={`/books/${book.id}`}
                    key={i}
                    ><div style={thisStyle} >
                        {/* <BookTease book={book} render={this.state.teaseRender} /> */}
                        </div></Link>
            )
        })
    
        return (
            <div className="image-slide" style={this.props.slideStyle}>
                {bookDivs}
            </div>
        )
    }
}

export default ImageSlide;