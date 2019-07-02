## HTML

* `GET /StaticPagesController#root`

.

## API Endpoints

.

### `users`

* `GET    /api/users/:userId` - get user info
    * returns user's demographics, library, wishlist, and shopping cart

* `POST   /api/users` - sign up

* `POST   /api/users/:userId/library/:bookId` - adds a book to user's library

* `POST   /api/users/:userId/wishlist/:bookId` - adds a book to user's wishlist 

* `DELETE /api/users/:userId/wishlist/:bookId` - removes a book from user's wishlist 
    
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


