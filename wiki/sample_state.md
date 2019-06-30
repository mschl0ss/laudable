```javascript
{
    entities: {
        users: {
            1: {
                id: 1,
                username: 'jsmith',
                email: 'j@smith.com',
                city: 'concord',
                state: 'ca'
            },
            2: {
                id: 2,
                username: 'jdoe',
                email: 'j@doe.com',
                city: 'norfolk',
                state: 'va'
            },
        },
        contentCreators: {
            1: {
                id: 1,
                name: 'Patrick Rothfuss',
                createdBooks: [1]
            },
            2: {
                id: 2,
                name: 'Frank Black',
                createdBooks: [1]
            },
            3: {
                id: 3,
                name: 'Alan Moore',
                createdBooks: [2]
            },
            4: {
                id: 4
                name: 'Kim Deal',
                createdBooks: [2]
            }
        },
        books: {
            1: {
                id: 1,
                title: 'Name of the Wind',
                authorId: 1,
                narratorId: 2,
                categoryId: 1,
                publisherSummary: 'Lorem ipsum dolor sit amet',
                releaseDate: '1/1/2000',
                lengthInMinutes: 500,
                priceInCents: 2000,
                language: 'english',
                reviews: [3, 5, 7]
            },
            2: {
                id: 2,
                title: 'Swamp Thing',
                authorId: 3,
                narratorId: 4,
                categoryId: 2,
                publisherSummary: 'Lorem ipsum dolor sit amet',
                releaseDate: '1/1/1980',
                lengthInMinutes: 300,
                priceInCents: 1500,
                language: english,
                reviews: [2, 4, 6]
            },

        },
        categories: {
            1: {
                id: 1,
                parentCategoryId: null,
                categoryName: 'Sci-Fi & Fantasy',
                childCategoryIds: [ 5, 6, 7]
            },
            2: {
                id: 2,
                parentCategoryId: 3,
                categoryName: 'Horror',
                childCategoryIds: []
            },
            3: {
                id: 3,
                parentCategoryId: null,
                categoryName: 'Fiction',
                childCategoryIds: [3]
            }
        },
        reviews: {
            1: {
                id: 1,
                title: 'Actually the best book of the last 10 years',
                body: 'So good.  Waiting so long for the last one.',
                bookId: 1,
                userId: 2,
                reviewType: 'user',
                ratingOverall: 5,
                ratingPerformance: 3,
                ratingStory: 5,
                helpfulScore: 10,
            },
            2: {
                id: 2,
                title: 'Alan Moore\'s best',
                body: 'This is the great author at his peak.  A master of his craft before the decadence set in.',
                bookId: 2,
                userId: 5,
                reviewTypeId: 'critic',
                ratingOverall: 5,
                ratingPerformance: 5,
                ratingStory: 5,
                helpfulScore: -1,
            },
        },
        shoppingCart: {
            1: {
                id: 1,
                userId: 1
            },
            1: {
                id: 2,
                userId: 5
            },
        },
        booksInUserCollection: {
            1: {
                id: 1,
                userId: 1,
                bookId: 1,
                collectionType: 'library'
            },
            2: {
                id: 2,
                userId: 3,
                bookId: 2,
                collectionType: 'library'
            },
            3: {
                id: 3,
                userId: 1,
                bookId: 2,
                collectionType: 'wishlist'
            }
        },
        shoppingCartBooks: {
            1: {
                id: 1,
                shoppingCartId: 1,
                bookId: 2,
            },
            2: {
                id: 2,
                shoppingCartId: 1,
                bookId: 1
            },
        }
    },
    ui: {
        loading: true / false
    },
    errors: {
        login: ["Incorrect username/password combination"]
    },
    session: { currentUserId: 897 }
}
```