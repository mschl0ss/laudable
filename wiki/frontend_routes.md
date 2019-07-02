### Component Hierarchy

* `Root`
    * `App`
        * `UserNav` (only renders if logged in)
        * `SiteNav` (only renders if logged in)
        * (main component)
        * `Footer`

### Main Component

* `/`
    * `NoSessionSplash`

    OR
    * `SessionSplash`
* `/login`
    * `SessionForm`
* `/signup`
    * `SessionForm`
* `/category/:categoryId`
    * `CategoriesIndex`
        *index will never actually show all categories, just current category and it's children*
        * `CategoryIndexItem`
    * `BooksSlideshow`
        * `BookSlideShowItem`
* `/books/:bookId`
    * `BookShow`
        * `BookSlideShowItem`
        * `CommentsIndex`
            * `CommentIndexItem`
* `/users/:userId/library`
    * `UserCatalogIndex`
        * `UserCatalogIndexItem`
* `/users/:userId/wishlist`
    * `UserCatalogIndex`
        * `UserCatalogIndexItem`
* `/users/:userId/shoppingCart`
    * `ShoppingCart`

