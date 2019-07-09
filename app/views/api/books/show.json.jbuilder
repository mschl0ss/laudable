json.key_format! camelize: :lower
json.partial! 'api/books/book', book: @book

# json.photoUrl url_for(@book.photo)
if @book.book_cover.attachment
    json.bookCoverUrl url_for(@book.book_cover)
end
