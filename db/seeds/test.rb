#COLLECTION BOOKS
collection_book_count = 200
(1..collection_book_count).each do |i|
    CollectionBook.create!(
        user_id: user_ids[i % user_count],
        book_id: book_ids[i % book_count],
        collection_type: i % 4 == 0 ? 'wishlist' : 'library'
    )
end