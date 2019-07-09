json.key_format! camelize: :lower

json.partial! 'api/content_creators/content_creator', cc: @content_creator

json.authored_books @content_creator.authored_books do |ab|
    json.extract! ab, :id
end

json.narrated_books @content_creator.narrated_books do |nb|
    json.extract! nb, :id
end