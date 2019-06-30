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
* `/users/:userId/library`
    * `UserCatalogIndex`
        * `UserCatalogIndexItem`
* `/users/:userId/wishlist`
    * `UserCatalogIndex`
        * `UserCatalogIndexItem`
* `/users/:userId/shoppingCart`
    * `ShoppingCart`

