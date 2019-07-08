import React from 'react';
import { Link } from 'react-router-dom';



class CategoryIndex extends React.Component {

    componentDidMount () {
        this.props.fetchCategories();
        
    }
    render() {
        // debugger;
        const parents = [];
        const children = [];
        this.props.categories.forEach( category => {
            if(category.parentCategoryId ) children.push(category);
            else parents.push(category);
        })

        const categoryLists = parents.map(parent => (
            <ul key={parent.id}>
                <li key={parent.id} className="lh">
                    <Link to={`/categories/${parent.id}`}>{parent.categoryName}</Link>
                </li>
                {children.map(child => { 
                    if (child.parentCategoryId === parent.id) {
                        return <li key={child.id}>
                            <Link to={`/categories/${child.id}`}>{child.categoryName}</Link>
                        </li>
                    }
                })}
            </ul>

        ))
     
        return (
            <section className="category-index">
                <h1>All Categories</h1>
                <h4>{parents.length} total</h4>

                <div className="category-lists-container">
                    {categoryLists}
                </div>
            </section>
        )
    }
}

export default CategoryIndex;