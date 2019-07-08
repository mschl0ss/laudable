json.extract! book, :id, :title, :author_id, :narrator_id, :publisher_summary,
    :release_date, :length_in_minutes, :price_in_cents, :language

json.photoUrl url_for(book.photo)

    # json.photoUrl book.photo.map { |file| url_for(file)}
