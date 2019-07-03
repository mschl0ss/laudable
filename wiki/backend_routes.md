## HTML

* `GET /StaticPagesController#root`

.

## API Endpoints

.

### `users`

* `GET    /api/users/:userId` - get user info
    * returns user's demographics, library, wishlist, and shopping cart

* `POST   /api/users` - sign up

* `POST   /api/users/library/:bookId` - adds a book to current user's library

* `POST   /api/users/wishlist/:bookId` - adds a book to current user's wishlist 

* `DELETE /api/users/wishlist/:bookId` - removes a book from current user's wishlist 
    
* `POST   /api/users//shoppingCart/` - create a new shopping cart for current_user

* `DELETE /api/users/shoppingCart/` - delete's current user's shopping cart

.

### `session`

* `POST /api/session` - log in

* `DELETE /api/session` - log out

.

### `books`

* `GET /api/books/:bookId` - returns a given book and its reviews

.

### `categories`

* `GET /api/categories/` - returns all all categories, with array of children ids

* `GET /api/categories/:categoryId/books` - returns all books of a given category



