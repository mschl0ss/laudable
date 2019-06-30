
## Stuff I dont know (not an exhaustive list)



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

### Selecting books by criteria logic: Selectors in Frontend or Customize JSON views?
maybe do in a selector?  maybe easier to do in backend because I'll have access to rails methods?

.

### Alternate name ideas: 
Flawdable?  