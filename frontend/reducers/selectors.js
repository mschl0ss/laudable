

export const getChildCategories = (state, categoryId) => {
    const children = [];

    const categories = Object.values(state.entities.categories);

    categories.forEach(category => {
        if (category.parentCategoryId === categoryId) children.push(category)
    });

    return children;
}

export const getSiblingCategories = (state, categoryId) => {
    const siblings = [];
    const thisCategory = state.entities.categories[categoryID];
    const categories = Object.values(state.entities.categories);

    categories.forEach(category => {
        if (category.parentCategoryId === thisCategory.parentCategoryId ) {
            siblings.push(category)
        }
    })

    return siblings;
}

export const getParentCategory = (state, categoryId) => {
    const thisCategory = state.entities.categories[categoryID];
    let parent;
    const categories = Object.values(state.entities.categories);

    categories.forEach(category => {
        if(category.id === thisCategory.parentCategoryId ) parent = category;
    })

    return parent
}