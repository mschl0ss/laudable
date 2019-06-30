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
    * `Subcategories`
        * `SubcategoryItem`
    * `BooksSlideshow`
        * `BookSlideShowItem`
* `/books/:bookId`
    * `BookShow`
        * `BookSlideShowItem`
        * `CommentItem`
* `/users/:userId/books`
    * `UserLibraryIndex`
        * `UserLibraryIndexItem`
* `/users/:userId/shoppingCart`
    * `ShoppingCart`

