### Component Hierarchy

* `Root`
    * `App`
        * `NavBar`
            * `UserNav`
            * `SiteNav`
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
* `/category/`
    * `CategoriesIndex`
        * `CategoryIndexColumn`
* `/category/:categoryId`
    * `SubCategoriesIndex`
        * `SubCategoryIndexItem`
    * `BooksSlideShow`
        * `BookSlideShowItem`
* `/books/:bookId`
    * `BookShow`
        * `BookSlideShow`
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

