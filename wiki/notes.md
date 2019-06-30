
## Stuff I dont know (not an exhaustive list)

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
:`/books/:categoryId/books`

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