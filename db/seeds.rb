# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'

# Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each do |seed|
#   load seed
# end

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
    Book.destroy_all
    Category.destroy_all
    BookCategory.destroy_all
    ContentCreator.destroy_all
    User.destroy_all

#USERS
user_count = 30

demoUser = User.create!(
    username: 'Guest',
    password: 'guestpassword',
    email: 'guest@guest.com',
    city: 'San Francisco',
    state: 'California' 
)


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
    
user_ids = (demoUser.id..User.last.id).to_a.shuffle


### CATEGORIES

# Root Categories (4)

root_cat_ae = Category.create!(
    parent_category_id: nil,
    category_name: "Arts & Entertainment"
)
root_cat_bm = Category.create!(
    parent_category_id: nil,
    category_name: "Bios & Memoirs"
)
root_cat_sff = Category.create!(
    parent_category_id: nil,
    category_name: "Sci-Fi & Fantasy"
)
root_cat_c = Category.create!(
    parent_category_id: nil,
    category_name: "Classics"
)


# 1. Arts & Entertainment (5)

cat_cb = Category.create!(
    parent_category_id: root_cat_ae.id,
    category_name: "Celebrity Bios"
)
cat_ip = Category.create!(
    parent_category_id: root_cat_ae.id,
    category_name: "Interviews & Panels"
)
Category.create!(
    parent_category_id: root_cat_ae.id,
    category_name: "Music"
)
Category.create!(
    parent_category_id: root_cat_ae.id,
    category_name: "TV & Film"
)
Category.create!( 
    parent_category_id: root_cat_ae.id,
    category_name: "Visual Arts"
)


# 2. Bios & Memoirs (8)

Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Artists, Writers, & Musicians"
)
Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Business Leaders"
)
Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Celebrities"
)
Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Criminals"
)
Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Personal Memoirs"
)
Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Political Figures"
)
Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Religious Figures"
)
Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Science & Technology Leaders"
)


# 3. Sci Fi & Fantasy (9)

Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Alternate History"
)
Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Dark Fantasy"
)
Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Fantasy: Contemporary"
)
Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Fantasy: Epic"
)
Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Fantasy: Paranormal"
)
Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Military Sci-Fi"
)
Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Post-Apocalyptic"
)
Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Superheroes"
)
Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Sword & Sorcery"
)


# 4. Classics (7)

Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "American Literature"
)
Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "British Literature"
)
Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "Drama"
)
Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "European Literature"
)
Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "Greek & Roman"
)
Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "Kids & Young Adults"
)
Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "Shakespeare"
)


################
#   BOOKS
################


#### Arts & Entertainment

## Celebrity Bios

a = ContentCreator.create!(fname: 'Andre', lname: 'Agassi')

n = ContentCreator.create!(fname: 'Erik', lname: 'Davies')

b = Book.create!(
    title: 'Open',
    subtitle: 'An Autobiography',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "From Andre Agassi, one of the most beloved athletes in history and one of the most gifted men ever to step onto a tennis court, a beautiful, haunting autobiography.
Agassi's incredibly rigorous training begins when he is just a child. By the age of 13, he is banished to a Florida tennis camp that feels like a prison camp. Lonely, scared, a ninth-grade dropout, he rebels in ways that will soon make him a 1980s icon. He dyes his hair, pierces his ears, dresses like a punk rocker. By the time he turns pro at 16, his new look promises to change tennis forever, as does his lightning-fast return.

And yet, despite his raw talent, he struggles early on. We feel his confusion as he loses to the world's best, his greater confusion as he starts to win. After stumbling in three Grand Slam finals, Agassi shocks the world, and himself, by capturing the 1992 Wimbledon. Overnight, he becomes a fan favorite and a media target.

Agassi brings a near-photographic memory to every pivotal match and every relationship. Never before has the inner game of tennis and the outer game of fame been so precisely limned. Alongside vivid portraits of rivals from several generations - Jimmy Connors, Pete Sampras, Roger Federer - Agassi gives unstinting accounts of his brief time with Barbra Streisand and his doomed marriage to Brooke Shields. He reveals a shattering loss of confidence. And he recounts his spectacular resurrection, a comeback climaxing with his epic run at the 1999 French Open and his march to become the oldest man ever ranked number one.

With its breakneck tempo and raw candor, Open will be listened to and cherished for years. A treat for ardent fans, it will also captivate listeners who know nothing about tennis. Like Agassi's game, it sets a new standard for grace, style, speed, and power.

©2009 Andre Agassi (P)2009 Random House",
    release_date: DateTime.new(2009,11,9),
    length_in_minutes: 1084,
    price_in_cents: 4393,
    language: 'english',
    publisher: 'Random House Audio'
)

file = open('https://laudable-seeds.s3-us-west-1.amazonaws.com/andreagassiopen.jpg')
b.book_cover.attach(io: file, filename: 'andreagassiopen.jpg')
# b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/andreagassiopen.jpg'), filename: 'andreagassiopen.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_cb.id
)

a = ContentCreator.create!(fname: 'John', lname: 'Cleese')

b = Book.create!(
    title: 'So, Anyway...',
    subtitle: '',
    author_id: a.id,
    narrator_id: a.id,
    publisher_summary: "John Cleese's huge comedic influence has stretched across generations; his sharp, irreverent eye and the unique brand of physical comedy he perfected with Monty Python, on Fawlty Towers, and beyond now seem written into comedy's DNA. In this rollicking memoir, So, Anyway..., Cleese takes listeners on a grand tour of his ascent in the entertainment world, from his humble beginnings in a sleepy English town and his early comedic days at Cambridge University (with future Python partner Graham Chapman) to the founding of the landmark comedy troupe that would propel him to worldwide renown.

Cleese was just days away from graduating Cambridge and setting off on a law career when he was visited by two BBC executives who offered him a job writing comedy for radio. That fateful moment - and a near-simultaneous offer to take his university humor revue to London's famed West End - propelled him down a different path, cutting his teeth writing for stars like David Frost and Peter Sellers and eventually joining the five other Pythons to pioneer a new kind of comedy that prized invention, silliness, and absurdity. Along the way he found his first true love with the actress Connie Booth and transformed himself from a reluctant performer to a world-class actor and back again.

Twisting and turning through surprising stories and hilarious digressions - with some brief pauses along the way that comprise a fascinating primer on what's funny and why - this story of a young man's journey to the pinnacle of comedy is a masterly performance by a master performer.

©2016 John Cleese (P)2016 Random House Audio",
    release_date: DateTime.new(2016,12,13),
    length_in_minutes: (13 * 60) + 32,
    price_in_cents: 3150,
    language: 'english',
    publisher: 'Random House Audio'
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/johncleesesoanyway.jpg'), filename: '')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_cb.id
)

a = ContentCreator.create!(fname: 'Lamar', lname: 'Odom')

n = ContentCreator.create!(fname: 'Chris', lname: 'Palmer')

b = Book.create!(
    title: 'Darkness to Light',
    subtitle: 'A Memoir',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "Fame. Sex. Pain. Drugs. Death. Booze. Money. Addiction. Redemption. Dizzying heights. Rock-bottom depths. Desperation and elation - sometimes in the same hour. Not to mention power . . . and the struggle for it.

The world knows Lamar Odom as a two-time NBA world champion who rocketed to uncharted heights of fame thanks to being a member of both the storied Los Angeles Lakers and the ubiquitous Kardashian empire.

But who is Lamar, really?

Fans have long praised his accessibility and genuine everyman quality - he is a blinding talent who has suffered a series of heartaches, setback, and loss. But until now, his most candid moments have remained behind closed doors . . . sometimes face-down on the floor.

In Darkness to Light, Lamar gives listeners an intimate look into his life like never before. His exclusive and revealing memoir recounts the highs and lows of fame and his struggle with his demons along the way to self-discovery and redemption. From the pain of his unraveled marriage to Khloé Kardashian to the harmful vices he used to cope - and the near-death experience that made him rethink everything about his life - this is Lamar as you have never before seen him.

Lamar brings basketball fans directly into the action of a game during the Lakers championship years. He shares his personal account of the lifelong passion that started as one shining light in a childhood marked by loss and led to his international fame as one of the most extraordinary athletes of all time. In this profoundly honest book, Lamar invites you to walk with him through the good times and bad, while looking ahead to a brighter future.

©2019 Nunnbetter Productions. (P)2019 Brilliance Publishing, Inc., all rights reserved. Published by arrangement with BenBella Books.",
    release_date: DateTime.new(2019,6,25),
    length_in_minutes: (7*60)+17,
    price_in_cents: 2499,
    language: 'english',
    publisher: "Brilliance Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/lamarodomdtol.jpg'), filename: '')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_cb.id
)

a = ContentCreator.create!(fname: 'Lamar', lname: 'Odom')

n = ContentCreator.create!(fname: 'Chris', lname: 'Palmer')

b = Book.create!(
    title: 'Darkness to Light',
    subtitle: 'A Memoir',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: 
    release_date: DateTime.new(2019,6,25),
    length_in_minutes: (7*60)+17,
    price_in_cents: 2499,
    language: 'english',
    publisher: "Brilliance Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/lamarodomdtol.jpg'), filename: '')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_ip.id
)

# #REVIEWS
# review_count = 500

# (1..review_count).each do |i|

#     body = rand(1..review_count*100).to_s + " | " 
#     body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " | "
#     body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " | " 
#     body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote
    
#     review_type = i % 20 == 0 ? 'critic' : i % 30 == 0 ? 'editor' : 'user'
#     Review.create!(
#         title: rand(1..review_count*100).to_s + " | " + Faker::Cosmere.surge + " | " + Faker::Quotes::Shakespeare.hamlet_quote,
#         body: body,
#         # book_id: i % book_count == 0 ? 1 : book_ids[i % book_count],
#         book_id: book_ids[i % book_count],
#         user_id: user_ids[i % user_count],
#         review_type: review_type,
#         rating_overall: rand(1..5),
#         rating_performance: rand(1..5),
#         rating_story: rand(1..5),
#         helpful_score: rand(-10..10)
#     )
# end

# #SHOPPING CART
# cart_count = user_count

# (1..cart_count).each do |user_id|
#     ShoppingCart.create!( user_id: user_id)
# end

# #SHOPPING CART BOOKS
# books_in_cart_count = 300

# cart_ids = (1..cart_count).to_a.shuffle

# (1..books_in_cart_count).each do |i|
#     ShoppingCartBook.create!(
#         shopping_cart_id: cart_ids[i % cart_count],
#         book_id: book_ids[i % book_count]
#     )

# end

# #COLLECTION BOOKS
# collection_book_count = 200
# (1..collection_book_count).each do |i|
#     CollectionBook.create!(
#         user_id: user_ids[i % user_count],
#         book_id: book_ids[i % book_count],
#         collection_type: i % 4 == 0 ? 'wishlist' : 'library'
#     )
# end


end
