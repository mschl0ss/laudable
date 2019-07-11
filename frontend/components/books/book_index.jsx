import React from 'react';
import {Link} from 'react-router-dom';



class BookIndex extends React.Component {

    //props.books should be an array of bookObjects
    // const books = props.books ? props.books : [];

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }
    componentDidMount() {
        this.setState( {books: this.props.books})
    }
    componentDidUpdate(prevProps,prevState,snapshot) {
        if(prevProps.books !== this.props.books) {
            this.setState( { books: this.props.books})
        }
    }

    render() {
        // debugger;
        const results = this.state.books.map(book=>(
            <li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
        ))

        return (
            <section className="books-index-wrapper">
                <h1>Showing Results</h1>
                <ul>
                    {results}
                </ul>
            </section>

        )
    }


}


export default BookIndex;