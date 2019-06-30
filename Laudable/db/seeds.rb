# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

#USERS
user_count = 30

user_count.times do
    name = Faker::Name.unique.name
    User.create(
        username: name, 
        password: Faker::Internet.password(7),
        email: Faker::Internet.email(name),
        city: Faker::Address.city,
        state: Faker::Address.state
        )
end

#CONTENT CREATORS
cc_count = 100
cc_count.times {ContentCreator.create(name: Faker::Book.author)}


#CATEGORIES (30 total)
(1..10).each do |i|
    Category.create(
        parent_category_id: nil,
        category_name: Faker::Book.unique.genre,
    )
end

(1..10).each do |i|
    Category.create(
        parent_category_id: i,
        category_name: Faker::Book.unique.genre,
    )
end
(11..20).each do |i|
    Category.create(
        parent_category_id: i,
        category_name: Faker::Book.unique.genre,
    )
end

#BOOKS
book_count = 100

(1..book_count).each do |i|
    pub_sum = Faker::Movies::PrincessBride.quote + " | "
    pub_sum += Faker::Movies::Lebowski.quote + " | "
    pub_sum += Faker::Movies::VForVendetta.quote
    
    Book.create( 
        title: Faker::Book.unique.title,
        author_id: i % 100,
        narrator_id: i+1 % 100,
        category_id: i % 30,
        publisher_summary: pub_sum,
        release_date: Date.today - rand(10000),
        length_in_minutes: rand(120...300),
        price_in_cents: rand(500...2000),
        language: i % 3 === 0 ? 'Spanish' : 'English'
    )

end


#REVIEWS
review_count = 200

(1..review_count).each do |i|
    i % 20 ? 'critic' : 'user'
    Review.create(
        title: Faker::Quotes::Shakespeare.hamlet_quote,
        body: Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " | " + Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " | " + Faker::Quotes::Shakespeare.romeo_and_juliet_quote,
        book_id: i > 50 ? 1 : i,
        user_id: i > 30 ? 1 : i,
        review_type: i % 20 ? 'critic' : 'user',
        rating_overall: rand(1..5),
        rating_performance: rand(1..5),
        rating_story: rand(1..5),
        helpful_score: rand(-10..10)
    )
end

#SHOPPING CART
cart_count = user_count

(1..cart_count).each do |user_id|
    ShoppingCart.create( user_id: user_id)
end

#SHOPPING CART BOOKS
books_in_cart_count = 300
book_ids = (1..book_count).to_a.shuffle
cart_ids = (1..cart_count).to_a.shuffle

(1..books_in_cart_count).each do |i|
    cart = i % cart_count
    book = i % book_count
    ShoppingCartBook.create(
        shopping_cart_id: cart,
        book_id: book
    )

end

#BOOKS IN USER COLLECTION 
books_in_collection_count = 200
(1..books_in_collection_count).each do |i|
    BookInUserCollection.create(
        user_id: i % user_count,
        book_id: i % book_count,
        collection_type: i % 4 == 0 ? 'wishlist' : 'library'
    )
end
