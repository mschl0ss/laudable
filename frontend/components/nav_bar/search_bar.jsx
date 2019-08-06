import React from 'react';
import { Link } from 'react-router-dom';
import BookIndexContainer from '../books/book_index';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            results: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchAndUpdate = this.fetchAndUpdate.bind(this);
        this.sendToBook = this.sendToBook.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', function(e) {
            if (e.target.id !== "search-bar-text-input" 
                && e.target.id !=="search-results-dd-list") {
                // debugger;
                if (document.getElementById("search-results-dd-list")) {
                    document.getElementById("search-results-dd-list").className = "hidden"
                }
            }
        })
      
        document.getElementById("search-bar-text-input")
            .addEventListener('focus', function (e){
                document.getElementById("search-results-dd-list")
                    .className = "search-results-dd "
            })

        // this.setState({text: document.getElementById("search-bar-text-input").value});

    }


    handleSubmit(e) {
        e.preventDefault();
        
        if (this.props.loggedIn) { 
            this.props.history.push('/books/filteredList');
        }
        else {
            this.props.history.push('/login');
        }
    }

    fetchAndUpdate(e) {
        this.setState( { text: e.target.value } );
        this.props.fetchSearchResults(e.target.value);
        this.props.receiveQueryString(e.target.value);
    }
    componentWillReceiveProps(nextProps) {
        this.setState( { results: Object.values(nextProps.searchResults)})
    }

    
    sendToBook(id) {
        this.props.history.push(`/books/${id}`)
    }

    render() {

        const resultsList = this.state.results.map(book => {
            return (
                    <li key={book.id} onClick={this.handleSubmit}>
                        {book.title}
                    </li>
            )
        })

        return (
            <div className="right search">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input
                        id="search-bar-text-input"
                        type="text"
                        value={this.state.text}
                        onChange={this.fetchAndUpdate}
                        placeholder="Find your next great listen"
                    />
                    <input type="image" src={this.props.searchIcon} alt="Search Laudable!" />
                </form>

              
                <ul className="search-results-dd hidden" id="search-results-dd-list">
                    {resultsList}
                    
                </ul>
                

            </div>
        )
    }
}

export default SearchBar;


