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


ActiveRecord::Base.transaction do

    CollectionBook.destroy_all
    ShoppingCartBook.destroy_all
    ShoppingCart.destroy_all
    Review.destroy_all
    BookCategory.destroy_all
    Book.destroy_all
    Category.destroy_all
    ContentCreator.destroy_all
    User.destroy_all

#USERS
user_count = 30
user_ids = (1..user_count).to_a.shuffle
# user_ids = (demo.id..User.last.id).to_a.shuffle

User.create!(
    username: 'Guest',
    password: 'guestpassword',
    email: 'guest@guest.com',
    city: 'San Francisco',
    state: 'California' 
)

# User.create!(username: 'Guest',  password: 'guestpassword',  email: 'guest@guest.com',  city: 'San Francisco',state: 'California' )

(2..user_count).each do
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


category_parent_count = 4
category_children_count = 29
category_ids = (1..category_children_count).to_a.shuffle

# Root Categories (4)

Category.create!(
    parent_category_id: nil,
    category_name: "Arts & Entertainment"
)
Category.create!(
    parent_category_id: nil,
    category_name: "Bios & Memoirs"
)
Category.create!(
    parent_category_id: nil,
    category_name: "Sci-Fi & Fantasy"
)
Category.create!(
    parent_category_id: nil,
    category_name: "Classics"
)


# 1. Arts & Entertainment (5)

Category.create!(
    parent_category_id: 1,
    category_name: "Celebrity Bios"
)
Category.create!(
    parent_category_id: 1,
    category_name: "Interviews & Panels"
)
Category.create!(
    parent_category_id: 1,
    category_name: "Music"
)
Category.create!(
    parent_category_id: 1,
    category_name: "TV & Film"
)
Category.create!( 
    parent_category_id: 1,
    category_name: "Visual Arts"
)


# 2. Bios & Memoirs (8)

Category.create!(
    parent_category_id: 2,
    category_name: "Artists, Writers, & Musicians"
)
Category.create!(
    parent_category_id: 2,
    category_name: "Business Leaders"
)
Category.create!(
    parent_category_id: 2,
    category_name: "Celebrities"
)
Category.create!(
    parent_category_id: 2,
    category_name: "Criminals"
)
Category.create!(
    parent_category_id: 2,
    category_name: "Personal Memoirs"
)
Category.create!(
    parent_category_id: 2,
    category_name: "Political Figures"
)
Category.create!(
    parent_category_id: 2,
    category_name: "Religious Figures"
)
Category.create!(
    parent_category_id: 2,
    category_name: "Science & Technology Leaders"
)


# 3. Sci Fi & Fantasy (9)

Category.create!(
    parent_category_id: 3,
    category_name: "Alternate History"
)
Category.create!(
    parent_category_id: 3,
    category_name: "Dark Fantasy"
)
Category.create!(
    parent_category_id: 3,
    category_name: "Fantasy: Contemporary"
)
Category.create!(
    parent_category_id: 3,
    category_name: "Fantasy: Epic"
)
Category.create!(
    parent_category_id: 3,
    category_name: "Fantasy: Paranormal"
)
Category.create!(
    parent_category_id: 3,
    category_name: "Military Sci-Fi"
)
Category.create!(
    parent_category_id: 3,
    category_name: "Post-Apocalyptic"
)
Category.create!(
    parent_category_id: 3,
    category_name: "Superheroes"
)
Category.create!(
    parent_category_id: 3,
    category_name: "Sword & Sorcery"
)


# 4. Classics (7)

Category.create!(
    parent_category_id: 4,
    category_name: "American Literature"
)
Category.create!(
    parent_category_id: 4,
    category_name: "British Literature"
)
Category.create!(
    parent_category_id: 4,
    category_name: "Drama"
)
Category.create!(
    parent_category_id: 4,
    category_name: "European Literature"
)
Category.create!(
    parent_category_id: 4,
    category_name: "Greek & Roman"
)
Category.create!(
    parent_category_id: 4,
    category_name: "Kids & Young Adults"
)
Category.create!(
    parent_category_id: 4,
    category_name: "Shakespeare"
)



#BOOKS
book_count = 100
book_ids = (1..book_count).to_a.shuffle

Book.create!(
    title: "Name of the Wind",
    author_id: 1,
    narrator_id: 1,
    publisher_summary: "Best fookin book ever",
    release_date: Date.today - rand(10000),
    length_in_minutes: rand(120...300),
    price_in_cents: rand(500...2000),
    language: 'english'
)
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


end
