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
    let count = 0;

    Object.values(state.entities.bookCategories).forEach(bc => {
        if (bc.categoryId === parseInt(categoryId)) count +=1;
    })

    return count;

}

export const getBookAuthor = (state, bookId) => {
    const ccs = Object.values(state.entities.contentCreators);
    const book = state.entities.books[bookId];
    let author;
    // debugger;
    if (!book) return null;
    ccs.forEach(cc => {
        if (cc.id === book.authorId) author = cc
    })
    
    return author;

}
export const getBookNarrator = (state, bookId) => {
    const ccs = Object.values(state.entities.contentCreators);
    const book = state.entities.books[bookId];
    let narrator;
    if (!book) return null;
    ccs.forEach(cc => {
        if (cc.id === book.narratorId) narrator = cc
    })
    
    return narrator;

}

export const getBookCategories = (state, bookId) => {
    const bcs = Object.values(state.entities.bookCategories);
    const categoryIds = [];
    const categories = Object.values(state.entities.categories);

    // const result = { category: undefined, rootCategory: undefined}
    const result = {}

    bcs.forEach(bc => {
        if(bc.bookId === parseInt(bookId) ) {
            result.category = state.entities.categories[bc.categoryId]
        }
    })

    if (result.category) {
        categories.forEach(category => {
        //    debugger;
        if(category.id === result.category.parentCategoryId ) {
            result.parentCategory = category;
        }
        })
    }

   return result;
}

export const getBookReviews = (state,bookId) => (

    Object.values(state.entities.reviews)
        .filter(review=> review.book_id = parseInt(bookId))
)

export const getBookReviewScores = (state,bookId) => {
    let count = {
        ratingOverall: { totalScore: 0, votesCast: 0},
        ratingPerformance: { totalScore: 0, votesCast: 0},
        ratingStory: { totalScore: 0, votesCast: 0},
    }

    Object.values(state.entities.reviews).forEach(review => {
        if(review.book_id !== parseInt(bookId)) {}
        else {
            if(review.ratingOverall !== null) {
                count.ratingOverall.totalScore += review.ratingOverall;
                count.ratingOverall.votesCast += 1;
            }
            if(review.ratingPerformance !== null) {
                count.ratingPerformance.totalScore += review.ratingPerformance;
                count.ratingPerformance.votesCast += 1;
            }
            if(review.ratingStory !== null) {
                count.ratingStory.totalScore += review.ratingStory;
                count.ratingStory.votesCast += 1;
            }
        }
    })
    // debugger;
    return count;
}