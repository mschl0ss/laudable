import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Carousel from '../book_carousel/carousel';

//this.props. children, parent, siblings
class CategoryShow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            category: {
                id: 0,
                parentCategoryId: 0,
                categoryName: 'blank',
                bookCount: 0,
                childBookCount: 0,
            },
            parent: {
                id: 0,
                categoryName: 'blank',
            },
            
        }

        this.renderContent = this.renderContent.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchBooks();
    }

    renderContent() {
        const bookCount = this.props.bookCount ? this.props.bookCount : 0;
        const children = this.props.children ? this.props.children : [];
        const siblings = this.props.siblings ? this.props.siblings : [];
        const category = this.props.category ? this.props.category : this.state.category;
        
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
    render () {
        const blankParent = { categoryName: '', id: 0, }
        const blankCategory = { categoryName: 'blank',}
        const category = this.props.category ? this.props.category : this.state.category
        const parent = this.props.parent ? this.props.parent : blankParent;
        const count = category.bookCount > category.childBookCount ? category.bookCount : category.childBookCount;
        
        // debugger;
       
        return (
            <section className="category-show">
                
                <header>
                    <div>
                        <Link to={`/categories/${parent.id}`}>
                            {parent.categoryName}
                        </Link>
                        <h1>{category.categoryName}</h1>
                        <h5>{count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} titles</h5>
                        {/* <h5>{Math.floor((Math.random() * 2000) + 2000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} titles</h5> */}
                    </div>
                    <aside>
                        <span className="dummy-link">
                            See all in {category.categoryName}
                        </span>
                    </aside>                    
                </header>
                <main>
                   <ul>
                        {this.renderContent()}
                    </ul> 
  
                    <section className="book-carousel">
                        <header>
                            <h3>New Releases</h3>
                            <aside>View all</aside>
                        </header>
                        <Carousel />
                    </section>
                    <section className="book-carousel">
                        <header>
                            <h3>Best Sellers</h3>
                            <aside>View all</aside>
                        </header>
                        <Carousel />
                    </section>
                </main>


            </section>
        )

    } 
}

export default CategoryShow;