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
standard users table

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

 * indices on `username`, `email`, `session_token` unique: true

.

## `content_creators`
includes both authors and narrators

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`name`|string|not null, indexed, unique|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

#### Other demographic fields? (bday, etc)
* index on `name`, unique: true

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
|`category_id`|integer|not null, indexed|
|`publisher_summary`|text|not null
|`release_date`|datetime|not null|
|`length_in_minutes`|integer|not null|
|`price_in_cents`|integer|not null|
|`language`|string|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* indices on `title`, `author_id`, `narrator_id`, `category_id`, unique: true
* both author and narrator are from `content_creators`

.

## `categories`

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`parent_category_id`|integer| |
|`category_name`|string|not null, unique, indexed |
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* index on `category_name`, unique: true

.

## `reviews`
review types are limited to **'editor'**, **'critic'**, or **'user'**

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

 * indices on `book_id`, `user_id`, `rating_overall`, unique: true
 * indices on `review_type`, `helpful_score`

.

## `shopping_carts`

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`user_id`|integer|not null, indexed, unique|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* index on user_id

.

## `book_categories`
joins table (books, categories)
should only contain leaf node categories.

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`book_id`|integer|not null, indexed|
|`category_id`|integer|not null, indexed|

indices on `book_id` & `category_id`

.

## `collection_books`
joins table (users, books)

`collection_type` is either **'library'** or **'wishlist'**

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`user_id`|integer|not null, indexed|
|`book_id`|integer|not null, indexed|
|`collection_type`|string|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* indices on `user_id` & `book_id`

.

## `shopping_cart_books`
joins tables (shopping_cart, books)

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`shopping_cart_id`|integer|not null, indexed|
|`book_id`|integer|not null, indexed|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* index on `shopping_cart_id`, `book_id`