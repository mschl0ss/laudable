import React from 'react';



class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mybool: false
        }
    }

    componentDidMount () {
        this.props.fetchCategories();
        
    }

    render() {
        // debugger;

        const cats = this.props.categories.map( cat => (
            <ul>
                <li>id: {cat.id}</li>
                <li>Name: {cat.categoryName}</li>
                <li>Parent: {cat.parentCategoryId}</li>
                <li>children: {cat.childCategories.map(child=>(
                    <ul>
                        <li>{child.id}</li>
                        <li>{child.categoryName}</li>
                    </ul>
                    ))
                }
                </li>
            </ul>
        ))
        return (
            <div>
                {cats}
                <button onClick={()=>this.setState( {mybool: !mybool})}>clicketyclikit</button>
            </div>
        )
    }
}

export default CategoryIndex;