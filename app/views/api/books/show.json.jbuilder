json.partial! 'api/books/book', book: @book

json.photoUrl url_for(@book.photo)
