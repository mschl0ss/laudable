import React from 'react';


class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchCategory(this.props.match.params.categoryId);
        this.props.fetchCategories();
    }

    render () {
        debugger;
        return (
            <div>what the shit</div>
        )

    }    
}

export default CategoryShow;