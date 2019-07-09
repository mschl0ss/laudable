json.extract! category, :id, :parent_category_id, :category_name
json.bookCount category.books.length


# json.childBookCount category.child_categories.books.length

count = 0

category.child_categories.each do |child|
    count += child.books.length
end

json.childBookCount count