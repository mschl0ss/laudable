json.key_format! camelize: :lower
# json.extract! @user, :username, :id, :email, :city, :state
json.extract! @user, :username, :id, :email,
                     :city, :state, :reviewed_book_ids,
                     :library_books,
                     :wishlist_books,
                     :cart_books

