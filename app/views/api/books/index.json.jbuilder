json.key_format! camelize: :lower

@books.each do |book|
    json.set! book.id do
        json.partial! 'api/books/book', book: book
        # if book.book_cover.attachment
            # json.bookCoverUrl url_for(book.book_cover)
        # end
    end
end