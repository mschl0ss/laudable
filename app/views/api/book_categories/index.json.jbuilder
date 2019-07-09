json.key_format! camelize: :lower

@BookCategories.each do |bc|
    json.set! bc.id do
        json.extract! bc, :book_id, :category_id
    end
end