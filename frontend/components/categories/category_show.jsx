import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import BookIndexContainer from '../books/book_index_container'
import CarouselContainer from '../book_carousel/carousel_container';

//this.props. children, parent, siblings
class CategoryShow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            category: {
                id: 0,
                parentCategoryId: 0,
                categoryName: 'blank',
            },
            parent: { id: 0, categoryName: 'blank', parentCategoryId: 0},
            children: [],
            siblings: [],
            searchResults: [],
            bookCount: 0,
        }

        this.renderContent = this.renderContent.bind(this);
        this.renderParentLink = this.renderParentLink.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchBooks();
        
        
       

    }

    componentDidUpdate(prevProps) {
        // debugger;
        if (prevProps.category !== this.props.category) {

            this.setState({ category: this.props.category})
            this.setState({ siblings: this.props.siblings })
            
            this.setState({ children: this.props.children })
            this.setState({ searchResults: this.props.searchResults})
            this.setState({ bookCount: this.props.bookCount})

            this.props.fetchSearchResults(`category: ${this.props.category.categoryName}`)

            if(this.props.children.length){
                this.props.receiveQueryString(``)
            }
            else {
                this.props.receiveQueryString(`Category: ${this.props.category.categoryName}`)
            }   
        }

        if (this.state.parent !== this.props.parent) this.setState({ parent: this.props.parent })
    }

    renderContent() {
        
        const children = this.state.children;
        const siblings = this.state.siblings
        // const category = this.props.category ? this.props.category : this.state.category;
        
        let categories = [];
        if (children.length) {
            categories = children.map(child => (
                <li key={child.id}>
                    <Link to={`/categories/${child.id}`}>{child.categoryName}</Link>
                    <span className="count">&#40;{child.bookCount}&#41;</span>
                </li>
            ))
        }
        else {
            categories = siblings.map(sibling => (
                <li key={sibling.id}>
                    <NavLink to={`/categories/${sibling.id}`}>{sibling.categoryName}</NavLink>
                    <span className="count">&#40;{sibling.bookCount}&#41;</span>
                </li>
            ))
        }

        // debugger;
        return categories;
        
    }

    renderParentLink() {

        if (this.props.parent !== undefined){
         return (
         <Link to={`/categories/${this.props.parent.id}`}>
            {this.props.parent.categoryName}
        </Link>
        )}
    }
    render () {

        const category = this.state.category;
        const parent = this.state.parent;
       
        return (
    
            <section className="category-show">
                
                <header>
                    <div>
                        {/* <Link to={`/categories/${parent.id}`}>
                            {parent.categoryName}
                        </Link> */}
                        {this.renderParentLink()}
                        <h1>{category.categoryName}</h1>
                        {/* <h5>{this.state.bookCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} titles</h5> */}
                        {/* <h5>{Math.floor((Math.random() * 2000) + 2000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} titles</h5> */}
                    </div>
                    <aside>
                        <span className="dummy-link">
                            &nbsp;
                        </span>
                    </aside>                    
                </header>
                <main>
                   <ul>
                        {this.renderContent()}
                    </ul> 

                    <section className="book-carousel">
                        <header>
                            <h3>Best Sellers</h3>
                            <aside><Link to="/books/filteredList/">View all</Link></aside>
                        </header>
                        <CarouselContainer />
                    </section>
                </main>

                <BookIndexContainer />
            </section>
        )

    } 
}

export default CategoryShow;