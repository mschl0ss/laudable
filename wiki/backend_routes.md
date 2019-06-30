## HTML

* `GET /StaticPagesController#root`

.

## API Endpoints

.

### `users`

* `GET    /api/users/:userId` - get user demographic info
* `POST   /api/users` - sign up
* `GET    /api/users/:userId/library` - returns books in user's library 

    *(returns all joins table rows for given `user_id`)*

* `POST   /api/users/:userId/library/:bookId` - adds a book to user's library 

    *(add joins table row)*

* `GET    /api/users/:userId/wishlist` - returns books in user's wishlist 

    *(return joins table row)*

* `POST   /api/users/:userId/wishlist/:bookId` - adds a book to user's wishlist 
    
    *(add joins table row)*

* `DELETE /api/users/:userId/wishlist/:bookId` - removes a book from user's wishlist 

    *(delete joins table row)*

* `GET    /api/users/:userId/shoppingCart/` - returns shopping cart 

    *(returns all joins table rows for given `user_id`)*
    
* `POST   /api/users/:userId/shoppingCart/` - create a new shopping cart
* `DELETE /api/users/:userId/shoppingCart/` - delete's user's shopping cart

.

### `session`

* `POST /api/session` - log in
* `DELETE /api/session` - log out

.

### `books`

* `GET /api/books/:categoryId/books` - returns all books of a given category
* `GET /api/books/:bookId` - returns a given book
* `GET /api/books/:bookId/reviews` - returns a given book's reviews

.

### `categories`

* `GET /api/categories/` - returns all all categories, with array of children ids


