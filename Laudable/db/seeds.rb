# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

### A note about faker and the 'unique' method.  The Faker categories are actually
### not too deep.  So if you see something like 'max retries exceeded' it's 
### because the category is all out of unique entries.  To solve this,
### I either concatenated multiple non-unique Faker generated things, and/or
### included a random number somewhere in the mix

#USERS
user_count = 30
user_ids = (1..user_count).to_a.shuffle

user_count.times do
    name = Faker::Name.unique.name
    User.create!(
        username: name, 
        password: Faker::Internet.password(7),
        email: Faker::Internet.email(name),
        city: Faker::Address.city,
        state: Faker::Address.state
        )
end

#CONTENT CREATORS
cc_count = 100
cc_ids = (1..cc_count).to_a.shuffle

cc_count.times {ContentCreator.create!(name: Faker::Book.author)}


#CATEGORIES (30 total)
#In order to have existing category ids to assign to parent id
#Loop through 3 times, each for 1/3 the total amount of desired categories
#the whole ().ceil business is essentially .to_i but rounding up


category_parent_count = 2
category_children_count = 20
category_ids = (1..category_children_count).to_a.shuffle

#parent loop
(1..category_parent_count).each do |i|
    Category.create!(
        parent_category_id: nil,
        category_name: Faker::Book.unique.genre,
    )
end

(1..category_children_count).each do |i|
    Category.create!(
        parent_category_id: i % 2 == 0 ? 1 : 2,
        category_name: Faker::Book.unique.genre,
    )
end


#BOOKS
book_count = 100
book_ids = (1..book_count).to_a.shuffle

(1..book_count).each do |i|
    pub_sum = Faker::Movies::PrincessBride.quote + " | "
    pub_sum += Faker::Movies::Lebowski.quote + " | "
    pub_sum += Faker::Movies::VForVendetta.quote
    
    Book.create!( 
        title: Faker::Book.unique.title,
        author_id: cc_ids[i % cc_count],
        narrator_id: cc_ids[i+1 % cc_count] == nil ? cc_ids[0] : cc_ids[i+1 % cc_count],
        publisher_summary: pub_sum,
        release_date: Date.today - rand(10000),
        length_in_minutes: rand(120...300),
        price_in_cents: rand(500...2000),
        language: i % 4 === 0 ? 'spanish' : 'english'
    )

end

#BOOK CATEGORIES
book_category_count = 150
book_ids = (1..book_count).to_a.shuffle
category_ids = (1..category_children_count).to_a.shuffle

(1..book_category_count).each do |i|
    BookCategory.create!(
        book_id: book_ids[i % book_ids.length],
        category_id: category_ids[i % category_ids.length]
    )
end


#REVIEWS
review_count = 500

(1..review_count).each do |i|

    body = rand(1..review_count*100).to_s + " | " 
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " | "
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " | " 
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote
    
    review_type = i % 20 == 0 ? 'critic' : i % 30 == 0 ? 'editor' : 'user'
    Review.create!(
        title: rand(1..review_count*100).to_s + " | " + Faker::Cosmere.surge + " | " + Faker::Quotes::Shakespeare.hamlet_quote,
        body: body,
        # book_id: i % book_count == 0 ? 1 : book_ids[i % book_count],
        book_id: book_ids[i % book_count],
        user_id: user_ids[i % user_count],
        review_type: review_type,
        rating_overall: rand(1..5),
        rating_performance: rand(1..5),
        rating_story: rand(1..5),
        helpful_score: rand(-10..10)
    )
end

#SHOPPING CART
cart_count = user_count

(1..cart_count).each do |user_id|
    ShoppingCart.create!( user_id: user_id)
end

#SHOPPING CART BOOKS
books_in_cart_count = 300

cart_ids = (1..cart_count).to_a.shuffle

(1..books_in_cart_count).each do |i|
    ShoppingCartBook.create!(
        shopping_cart_id: cart_ids[i % cart_count],
        book_id: book_ids[i % book_count]
    )

end

#COLLECTION BOOKS
collection_book_count = 200
(1..collection_book_count).each do |i|
    CollectionBook.create!(
        user_id: user_ids[i % user_count],
        book_id: book_ids[i % book_count],
        collection_type: i % 4 == 0 ? 'wishlist' : 'library'
    )
end
