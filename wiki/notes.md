
## Stuff I dont know (not an exhaustive list)

### Right now a ContentCreator could be both a narrator and an author.  That's maybe not good?

.

### Probably don't need a joings table for books/categories
Each book only has one category

.

### Composite keys
Eg in `books_in_user_library` the combination of book and user should be unique.
Should I enforce at db level, model level, or later?

from [Rails Docs](https://guides.rubyonrails.org/active_record_validations.html#uniqueness)
```ruby
class Holiday < ApplicationRecord
  validates :name, uniqueness: { scope: :year,
    message: "should happen once per year" }
end
```

### Do I need a shopping cart table?
I'm literally just tracking user_id in it.  
BUT shopping_cart lets me just delete the shopping cart and start fresh, instead
 of going through the joins table and removing items 

.

### Categories, their parents and their children
Anything wrong with loading all descendants into state when I grab a category?
Should I just load all categories into state from the get go or actually grab as needed?

.

### Can i have multiple routes going to the same place
Given these two routes:

1 `GET /api/books/:categoryId` - returns all books of a given category

2 `GET /api/books/:bookId` - returns a given book

Does this work?  How would I differentiate between the two
 requests? Since they'd be coming in along the same route with a wildcard, they'd
 look identical.

*current design in backend_routes*
:`api/books/:categoryId/books`

.

### How do I implement search?
Frontend routes?
What ajax calls?

.

### How much home page stuff to do?

.

### When to implement footer?

.

### ActiveStorage
Since it's part of my bonus MVPs, how much do I need to engage with it?
How do I get images for books?

.

### Selecting books by criteria logic: Selectors in Frontend or Customize JSON views?
maybe do in a selector?  maybe easier to do in backend because I'll have access to rails methods?

.

### shopping cart implementation?
Can we walk through the high level strategy?

.

### Alternate name ideas: 
Flawdable?  