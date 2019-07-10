

@books.each do |book|
    json.set! book.id do
        # json.extract! book, :title
        json.partial! 'api/books/book', book: book
    end
end