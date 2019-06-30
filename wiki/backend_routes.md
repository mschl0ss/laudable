## HTML

* `GET / StaticPagesController#root`

.

## API Endpoints

.

### `users`

* `GET /api/user/:userId` - get user demographic info
* `POST /api/users` - sign up
* `GET /api/users/:userId/shoppingCart/` - returns shopping cart
* `POST /api/users/:userId/shoppingCart/` - create a new shopping cart
* `PATCH /api/users/:userId/shoppingCart/` - updates user's shopping cart
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


