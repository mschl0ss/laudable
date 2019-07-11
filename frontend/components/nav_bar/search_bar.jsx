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
                document.getElementById("search-results-dd-list")
                    .className = "hidden"
            }
        })
      
        document.getElementById("search-bar-text-input")
            .addEventListener('focus', function (e){
                document.getElementById("search-results-dd-list")
                    .className = "search-results-dd "
            })

    }


    handleSubmit(e) {
        e.preventDefault();
        
        if (this.props.loggedIn) { 
            console.log("render bookindex with search results");
        }
        else {
            console.log('show an error in the dropdown "have to be logged in"');
        }
    }

    fetchAndUpdate(e) {
        this.setState( { text: e.target.value } );
        this.props.fetchSearchResults(e.target.value);
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
                <Link 
                    key={book.title}
                    to={`/search/`}>
                    <li>
                        {book.title}
                    </li>
                </Link>
            )
        })

        return (
            <div className="right search">
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="search-bar-text-input"
                        type="text"
                        value={this.state.text}
                        onChange={this.fetchAndUpdate}
                        placeholder="Find your next great listen"
                    />
                    <input type="image" src={this.props.searchIcon} alt="Search Laudable!" />
                </form>

              
                <ul className="search-results-dd" id="search-results-dd-list">
                    {resultsList}
                    <li className="last hidden"></li>
                </ul>
                

            </div>
        )
    }
}

export default SearchBar;


{/* <form onSubmit={this.handleSubmit}>
    <input
        type="text"
        value={this.state.search}
        onChange={this.updateField('search')}
        placeholder="Find your next great listen"
    />
    <img src={searchIcon}></img>
    <span className="search-icon rotate">&#x260C;</span>
</form> */}