import React from 'react';
import { Link } from 'react-router-dom';

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
            // debugger;
            console.log(e.target.id);
            if (e.target.id !== "search-bar-text-input" 
                && e.target.id !=="search-results-dd-list") {
                // debugger;
                document.getElementById("search-results-dd-list")
                    .className = "hidden"
            }
        })
      
        // document.getElementById("search-results-dd-list")
        //     .addEventListener('click', function (e) {e.stopPropagation()})

        // document.getElementById("search-bar-text-input")
        //     .addEventListener('click', function (e) { e.stopPropagation() })

        
        // document.getElementById("search-bar-text-input")
        //     .addEventListener('focusout', () => {
        //         document.getElementById("search-results-dd-list")
        //             .className = "hidden"
        //     })
        
        document.getElementById("search-bar-text-input")
            .addEventListener('focus', function (e){
                document.getElementById("search-results-dd-list")
                    .className = "search-results-dd "
            })
        // document.getElementById("search-bar-text-input")
        //     .addEventListener('blur', () => {
        // document.getElementById("search-results-dd-list")
        //     .className = "hidden"
        //     })
    }

    hideResultsDropDown() {
        const dd = document.getElementById("search-results-dd-list");
        dd.className = 'hidden';
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
            console.log(book)
            return (
            
            <li
                key={book.title}
                onClick={()=>{
                    console.log(book.id)
                    this.props.history.push(`/books/${book.id}`)}}
            >
                {book.title}
            </li>
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
                    <li>Whatup Search</li>
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