import { fetchCategory, fetchCategories } from '../actions/category_actions';

export const getTargetCategories = (state, type, categoryId) => {
    fetchCategories();
    const categories = Object.values(state.entities.categories);
    const thisCategory = state.entities.categories[categoryId];

    switch (type) {
        case 'children':
            const children = [];
            categories.forEach(category => {
                if (category.parentCategoryId === categoryId) children.push(category)
            });
            return children;

        case 'siblings':
            const siblings = [];
            categories.forEach(category => {
                if (category.parentCategoryId === thisCategory.parentCategoryId) {
                    siblings.push(category)
                }
            })
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