# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

#USERS

30.times do
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
100.times {ContentCreator.create(name: Faker::Book.author)}

#BOOKS
(1..50).each do |i|
    pub_sum = Faker::Movies::PrincessBride.quote + " | "
    pub_sum += Faker::Movies::Lebowski.quote + " | "
    pub_sum += Faker::Movies::VForVendetta.quote
    
    Book.create( 
        title: Faker::Book.unique.title,
        author_id: i,
        narrator_id: i+1,
        publisher_summary: pub_sum,
        release_date: Date.today - rand(10000),
        length_in_minutes: rand(120...300),
        price_in_cents: rand(500...2000),
        language: i % 3 === 0 ? 'Spanish' : 'English'
    )

end

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

#REVIEWS
(1..200).each do |i|
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
(1..30).each do |user_id|
    ShoppingCart.create( user_id: user_id)
end

#BOOK CATEGORIES
category_ids = (1..30).to_a.shuffle

(1..50).each do |i|
    BookCategory.create(
         book_id: i,
         category_id: category_ids[i%30] )
end


#SHOPPING CART BOOKS

cart_ids = (1..30).to_a.shuffle
book_ids = (1..50).to_a.shuffle

(1..300).each do |i|
    cart = i % 30
    book = i % 50
    ShoppingCartBook.create(
        shopping_cart_id: cart,
        book_id: book
    )

end

#BOOKS IN USER WISHLIST (30 users, 50 books)

(1...200).each do |i|
    BookInUserWishList.create(
        user_id: i % 30,
        book_id: i % 50
    )
end

#BOOKS IN USER LIBRARY (30 users, 50 books)

(1...300).each do |i|
    BookInUserLibrary.create(
        user_id: i % 30,
        book_id: i % 50
    )
end
