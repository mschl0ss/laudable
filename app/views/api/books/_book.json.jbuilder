
# json.extract! book, :id, :title, :subtitle, :author_id, :narrator_id, :publisher_summary,
#     :release_date, :length_in_minutes, :price_in_cents, :language, :publisher
json.key_format! camelize: :lower
json.extract! book, :id, 
            :title, :subtitle,
            :author_id, :author,
            :narrator_id, :narrator,
            :category, :parent_category,
            :language, 
            :publisher_summary, :publisher,
            :length_in_minutes, :release_date,
            :total_reviews,
            :overall_total,
            :overall_votes,
            :performance_total,
            :performance_votes,
            :story_total,
            :story_votes,
            :price_dollars, :price_cents


