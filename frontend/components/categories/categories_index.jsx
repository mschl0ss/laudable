import React from 'react';



class CategoryIndex extends React.Component {

    componentDidMount () {
        this.props.fetchCategories();
        
    }
    render() {
        const parents = [];
        const children = [];
        this.props.categories.forEach( category => {
            if(category.parentCategoryId ) children.push(category);
            else parents.push(category);
        })

        const categoryLists = parents.map(parent => (
            <ul key={parent.id}>
                <li key={parent.id} className="lh">{parent.categoryName}</li>
                {children.map(child => { 
                    if (child.parentCategoryId === parent.id) {
                        return <li key={child.id}>{child.categoryName}</li>
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