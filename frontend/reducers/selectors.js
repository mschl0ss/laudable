import { fetchCategory, fetchCategories } from '../actions/category_actions';

export const getTargetCategories = (state, type, categoryId) => {
    const categories = Object.values(state.entities.categories);
    const thisCategory = state.entities.categories[categoryId];

    switch (type) {
        case 'children':
            const children = [];
            categories.forEach(category => {
                if (category.parentCategoryId === parseInt(categoryId)) children.push(category)
            });
            return children;

        case 'siblings':
            const siblings = [];
            categories.forEach(category => {
                if (thisCategory.parentCategoryId !== null && category.parentCategoryId === thisCategory.parentCategoryId) {
                    siblings.push(category)
                }
            })
            // debugger;
            return siblings;

        case 'parent':
            let parent;
            categories.forEach(category => {
                if (category.id === thisCategory.parentCategoryId) parent = category;
            })
            return parent;
        case 'parents':
            
            const parents = [];
            categories.forEach(category => {
                if(category.parentCategoryId === null ) parents.push(category);
            })
            return parents;
        default:
            return undefined;
    }   
}

export const getBookCount = (state, categoryId) => {
    const bookCategories = Object.values(state.entities.bookCategories);

    let count = 0;

    Object.values(state.entities.bookCategories).forEach(bc => {
        if (bc.categoryId === parseInt(categoryId)) count +=1;
    })

    // debugger;
    return count;

}

export const getBookAuthor = (state, bookId) => {
    const ccs = Object.values(state.entities.contentCreators);
    const book = state.entities.books[bookId];
    let author;

    ccs.forEach(cc => {
        if (cc.id === book.authorId) author = cc
    })
    
    return author;

}
export const getBookNarrator = (state, bookId) => {
    const ccs = Object.values(state.entities.contentCreators);
    const book = state.entities.books[bookId];
    let narrator;

    ccs.forEach(cc => {
        if (cc.id === book.narratorId) narrator = cc
    })
    
    return narrator;

}