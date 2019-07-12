json.key_format! camelize: :lower

@books.each do |book|
    json.set! book.id do
        # json.extract! book, :title
        json.extract! book, :id, :title, :author_id, :author,
            :narrator_id, :narrator, :length_in_minutes, :release_date, :total_reviews,
            :price_dollars, :price_cents
        json.bookCoverUrl url_for(book.book_cover)
    end
end