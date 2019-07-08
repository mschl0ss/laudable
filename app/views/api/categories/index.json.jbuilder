
# json.categories @categories do |category|
#     json.partial! 'api/categories/category', category: category

#     json.child_categories category.child_categories do |child_category|
#         json.partial! 'api/categories/category', category: child_category
#     end
# end

json.key_format! camelize: :lower

@categories.each do |category|
    json.set! category.id do
        json.partial! 'api/categories/category', category: category

        json.child_categories category.child_categories do |child_category|
            json.partial! 'api/categories/category', category: child_category
        end

    end
end
        



# @categories.each do |category|
#  json.set! category.id do
#    json.extract! category, :id, :name
#  end
# end