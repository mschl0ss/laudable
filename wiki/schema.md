#### Users: 
 [users](https://github.com/mschl0ss/laudable/wiki/schema#users) .
 [content_creators](https://github.com/mschl0ss/laudable/wiki/schema#content_creators)

#### Books:
 [books](https://github.com/mschl0ss/laudable/wiki/schema#books) .
 [categories](https://github.com/mschl0ss/laudable/wiki/schema#categories) .
 [reviews](https://github.com/mschl0ss/laudable/wiki/schema#reviews)

#### Shopping Cart:
[shopping_carts](https://github.com/mschl0ss/laudable/wiki/schema#shopping_carts)

#### Joins Tables:
 [book_categories](https://github.com/mschl0ss/laudable/wiki/schema#book_categories) .
 [collection_books](https://github.com/mschl0ss/laudable/wiki/schema#collection_books) .
 [shopping_cart_books](https://github.com/mschl0ss/laudable/wiki/schema#shopping_cart_books)


.

## `users`

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`username`|string|not null, indexed, unique|
|`password_digest`|string|not null|
|`session_token`|string|not null, indexed, unique|
|`email`|string|not null, indexed, unique|
|`city`|string| |
|`state`|string| |
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

.

## `content_creators`
* includes both authors and narrators

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`name`|string|not null, indexed, unique|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

#### Other demographic fields? (bday, etc)

.

## `books`
* will need to convert price_in_cents to $0.00 format
* model level validation on approved languages

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`Title`|string|not null, indexed, unique|
|`author_id`|integer|not null, indexed|
|`narrator_id`|integer|not null, indexed|
|`publisher_summary`|text|not null
|`release_date`|datetime|not null|
|`length_in_minutes`|integer|not null|
|`price_in_cents`|integer|not null|
|`language`|string|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* foreign_keys: `author_id`, `narrator_id`, on table: **`content_creators`**

.

## `categories`

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`parent_category_id`|integer| |
|`category_name`|string|not null, unique, indexed |
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* foreign_keys: `parent_category_id`, on table: **`categories`**

.

## `reviews`
* review types are limited to **'editor'**, **'critic'**, or **'user'**

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`title`|string|not null|
|`body`|text|not null|
|`book_id`|integer|not null, indexed, unique|
|`user_id`|integer|not null, indexed, unique|
|`review_type`|string|not null, indexed|
|`rating_overall`|integer| |
|`rating_performance`|integer| |
|`rating_story`|integer| |
|`helpful_score`|integer|indexed, default: 0|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

 * foreign_key: `book_id`, on table: **`books`**
 * foreign_key: `user_id`, on table: **`users`**

.

## `shopping_carts`

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`user_id`|integer|not null, indexed, unique|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* foreign_keys: `user_id`, on table: **`users`**

.

## `book_categories`
* joins table (books, categories)
* should only contain leaf node categories.

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`book_id`|integer|not null, indexed|
|`category_id`|integer|not null, indexed|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* foreign_keys: `book_id`, on table: **`books`**
* foreign_keys: `category_id`, on table: **`categories`**

.

## `collection_books`
* joins table (users, books)

`collection_type` is either **'library'** or **'wishlist'**

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`user_id`|integer|not null, indexed|
|`book_id`|integer|not null, indexed|
|`collection_type`|string|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* foreign_keys: `book_id`, on table: **`books`**
* foreign_keys: `user_id`, on table: **`users`**

.

## `shopping_cart_books`
* joins tables (shopping_cart, books)

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`shopping_cart_id`|integer|not null, indexed|
|`book_id`|integer|not null, indexed|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* foreign_keys: `book_id`, on table: **`books`**
* foreign_keys: `shopping_cart_id`, on table: **`shopping_carts`**