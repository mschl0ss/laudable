Laudable, an Audible clone, is an audiobook store and library that allows users
 to browse the catalog, search for specific titles, leave reviews for books, and
 purchase books for their own library.

 Due date is 7/12

 ## Prework
 ### 6 / 30 / 2019 :: Sunday :: 1 day
  * Prepare seed data

.

.

# Core MVPs

.

## 1. Hosting on Heroku
### 7 / 03 / 2019 :: Wednesday :: 1 day

.

## 2. User sign up and sign in.  Demo user sign in.
### 7 / 03 / 2019 :: Wednesday :: 2 days
* User is greeted by not logged in splash page
* Users can sign up, sign in, and log out
* Users can use a demo login to try out the site
* Users can't use certain features without logging in
    Adding reviews, personal library, shopping cart all require log in

.

## 3. Audio Books / Categories
### 7 / 05 / 2019 :: Friday :: 1 day
* On login, user is greeted by logged in splash page **(NEED TO REVIEW)**
* User engages with the catalog by using the 'Browse' drop down on the Nav Bar
* When a top level category is chosen in the navbar, several sections render
    * Subcategories component - lists all direct subcategories of given category
    * BooksSlideShow component - Best Sellers - Display those books in the given category that whose Ids occur most frequently in `books_in_user_library`
    * BooksSlideShow component - New Releases -Display those books in the given category that were relased most recently

#### BONUS
* On mouse over of an individual book, a pop up shows book info, overall review score, and the most helpful review

.
     
## 4. Search
### 7 / 06 / 2019 :: Saturday :: 2 days
* User can use search field in UserNav bar
* Search results display in drop down that appears below text input
* Search results update roughly 1 second after last keypress
* Search returns a list of books, prioritizing title match then author match (based on top result)

#### BONUS
* Search results page has the following features:
  1. List of categories with count.  Each category is a clickable link to further narrow search results
  2. 'Filter by' section allows filtering by length & language

.
     
## 5. Book Show Page with Comments
### 7 / 08 / 2019 :: Monday :: 2 days
* Book show page should display when it is clicked on in either search results or book/categories indexes
* Should display book info, including category tree.
* Displays an editorial review
* Display publisher summary
* Displays critic reviews
* Shows a 'more from the same' section, with links to other works by author and narrator
* Display a comments section

#### BONUS
* Display a 'People who bought this also bought' section
* Comments section is sortable by most recent or most helpful

.
     
## 6. Library / Shopping Cart :: 7 / 10 / 2019 :: Wednesday :: 2 days
### 
* User can add books to the shopping cart from the book show page or search results
* User accesses cart from UserNav bar
* Cart has three sections
  1. Cart - shows books in cart
  2. Checkout - user can submit purchase (include and 'add money to account' button)
  3. Confirmation - 
    1. Cost is deducted from user's wallet
    2. books are added to the library.
    3. shopping cart is deleted and a new one is made
* Library page shows a list with details of all owned books

#### BONUS
* Cart page shows the subtotal on the right 
* SEARCH: results include either two buttons for adding to library/wishlist or a button 'In your library' that redirects to library
* SHOW: If a book is in a user's library, they can leave a review on the show page
* order history

.
     
## 7. Production README
### 7 / 12 / 2019 :: Friday :: 1/2 day

.

# Bonus MVPs

## Wish List
* User can access their wish list from SiteNav
* User can add books to their wish list on show page
* User can add books to their wish list on search page

## Audio Player
* User can click on a title in their library and an audio player pops out as a new window


