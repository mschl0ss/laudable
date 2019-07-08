import React from 'react';
import { Link } from 'react-router-dom';

//this.props. children, parent, siblings
class CategoryShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.categoryId);
        this.props.fetchCategories();
    }

    renderContent() {
        
        const categories = this.props.categories ? this.props.categories : [];
        const children = this.props.children ? this.props.children : [];
        const siblings = this.props.siblings ? this.props.siblings : [];
        
        if (children.length) console.log("it has children");
        if (siblings.length) console.log("it has siblings");
    }
    render () {
        const blankParent = { categoryName: '', id: 0, }
        const blankCategory = { categoryName: 'blank',}
        const category = this.props.category ? this.props.category : blankCategory;
        const parent = this.props.parent ? this.props.parent : blankParent;
         this.renderContent() 
        return (
            <section className="category-show">
                
                <header>
                    <div>
                        <Link to={`/categories/${parent.id}`}>
                            {parent.categoryName}
                        </Link>
                        <h1>{category.categoryName}</h1>
                        <h5>{Math.floor(Math.random() * 10) + 1000} titles</h5>
                    </div>
                    <aside>
                        <span className="dummy-link">
                            See all in {category.categoryName}
                        </span>
                    </aside>

                    
                </header>
                <main>
                    


                </main>


            </section>
        )

    } 
}

export default CategoryShow;