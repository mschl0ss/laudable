#### Users: 
 [users](https://github.com/mschl0ss/laudable/wiki/DB-Schema#users) .
 [content_creators](https://github.com/mschl0ss/laudable/wiki/DB-Schema#content_creators)

#### Books:
 [books](https://github.com/mschl0ss/laudable/wiki/DB-Schema#books) .
 [categories](https://github.com/mschl0ss/laudable/wiki/DB-Schema#categories) .
 [reviews](https://github.com/mschl0ss/laudable/wiki/DB-Schema#reviews)

#### Shopping Cart:
[shopping_cart](https://github.com/mschl0ss/laudable/wiki/DB-Schema#shopping_cart)

#### Joins Tables:
 [books_in_user_library](https://github.com/mschl0ss/laudable/wiki/DB-Schema#books_in_user_library) .
 [books_in_user_wishlist](https://github.com/mschl0ss/laudable/wiki/DB-Schema#books_in_user_wishlist) . 
 [book_categories](https://github.com/mschl0ss/laudable/wiki/DB-Schema#book_categories) .
 [shopping_cart_books](https://github.com/mschl0ss/laudable/wiki/DB-Schema#shopping_cart_books)


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
|`publisher_summary`|text|not null
|`release_date`|datetime|not null|
|`length_in_minutes`|integer|not null|
|`price_in_cents`|integer|not null|
|`language`|string|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* indices on `title`, `author_id` & `narrator_id`, unique: true
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
review types are limited to 3 types by model validation
    ['editor', 'critic', 'user']

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
 * indices on `review_type_id`, `helpful_score`

.

## `shopping_cart`
|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`user_id`|integer|not null, indexed, unique|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* index on user_id

.

## `books_in_user_library`
joins table (users, books)

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`user_id`|integer|not null, indexed|
|`book_id`|integer|not null, indexed|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* indices on `user_id` & `book_id`

.

## `books_in_user_wishlist`
joins table (users, books)

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`user_id`|integer|not null, indexed|
|`book_id`|integer|not null, indexed|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* indices on `user_id` & `book_id`

.

## `book_categories`
joins table (books, category)

|column|datatype|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`book_id`|integer|not null, indexed|
|`category_id`|integer|not null, indexed|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

* indices on `category_id` & `book_id`

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