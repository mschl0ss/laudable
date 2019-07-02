# Strategies

.

## Books & Languages

* JSON view needs to package that up nicely

## Search

* do a GET request for all books, filter on frontend (in selector?)
* there was definitely a project that did searching.  check it.

## New Releases (all categories)

* do a GET request for all books, filter on frontend (in selector?)

## New Release (in category)

* do a GET request for all books of category, filter by release date on frontend

## Shopping Cart

* Need to track fake user money.  Either in a column in user table or just in redux state.
* when user is created, shopping cart is created for them
* when a user checks out, the shopping cart is deleted and a new one is made
* this will leave a bunch of 'dead' entries in the `shopping_cart_books` table
    it only works because of the small scope of the project, otherwise I'd have
    go through and delete relevant data in the joins table.

## Categories

* nail the json view.  each category returned should have an index of children

