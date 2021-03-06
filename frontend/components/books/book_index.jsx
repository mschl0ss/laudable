import React from 'react';
import {Link} from 'react-router-dom';
import BookIndexItem from './book_index_item';


class BookIndex extends React.Component {

    //props.books should be an array of bookObjects
    // const books = props.books ? props.books : [];

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            allBooks: [],
            queryString: '',
        }
    }
    componentDidMount() {
        this.setState( {books: this.props.books});
        this.setState( {queryString: this.props.queryString})
        this.setState( {allBooks: this.props.allBooks})

        
    }
    componentDidUpdate(prevProps) {
        if(prevProps.books !== this.props.books) {
            this.setState( { books: this.props.books})
            this.setState( { queryString: this.props.queryString})
            this.setState({ allBooks: this.props.allBooks })
        }
    }

    render() {
   
        const queryLength = this.state.queryString.length ? true : false;
        let resultsFor = '';
        let books;
        const user = this.props.user;
        
       
         //if queryString has characters and state.books has length => Showing results for
         if (queryLength === true && this.state.books.length !== 0) {
             resultsFor = `Showing Results for "${this.state.queryString}"`;
             books = this.state.books;
         }
         // if queryString has characters and state.books has no length => No results for
         else if (queryLength === true && this.state.books.length === 0) {
             resultsFor = `No Results for "${this.state.queryString}"`;
             books = []
         }
         // if queryString has no characters, show all
         else {
             books = this.state.allBooks;
             resultsFor = books.length ? 'Showing All' : "No Results";
         }
         
        const results = books.map(book => {
            const status = user.libraryBooks.includes(book.id)?
                "library" :
                user.wishlistBooks.includes(book.id) ?
                    "wishlist" : 
                    user.shoppingCartBooks.includes(book.id) ?
                        "cart" : "unowned";
            return (
            <li key={book.id}>
                <BookIndexItem book={book} status={status} user={this.props.user}/>
            </li>
        )
        })

        return (
            <section className="books-index-wrapper">
                <h1>{resultsFor}</h1>
                <ul>
                    {results}
                </ul>
            </section>

        )
    }


}


export default BookIndex;