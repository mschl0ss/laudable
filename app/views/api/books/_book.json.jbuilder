
json.extract! book, :id, :title, :subtitle, :author_id, :narrator_id, :publisher_summary,
    :release_date, :length_in_minutes, :price_in_cents, :language, :publisher

json.extract! book, :id, 
            :title, :subtitle,
            :author_id, :author,
            :narrator_id, :narrator,
            :language, 
            :publisher_summary, :length_in_minutes, :release_date, :total_reviews,
            :price_dollars, :price_cents


