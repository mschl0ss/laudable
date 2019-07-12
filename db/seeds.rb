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

cat_ae_cb = Category.create!(
    parent_category_id: root_cat_ae.id,
    category_name: "Celebrity Bios"
)
cat_ae_ip = Category.create!(
    parent_category_id: root_cat_ae.id,
    category_name: "Interviews & Panels"
)



# 2. Bios & Memoirs (8)


cat_bm_stl = Category.create!(
    parent_category_id: root_cat_bm.id,
    category_name: "Science & Technology Leaders"
)


# 3. Sci Fi & Fantasy (9)

cat_sff_fc=Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Fantasy: Contemporary"
)
cat_sff_sfc = Category.create!(
    parent_category_id: root_cat_sff.id,
    category_name: "Sci-Fi: Classic"
)



# 4. Classics (7)

cat_cla_al = Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "American Literature"
)
cat_cla_gr = Category.create!(
    parent_category_id: root_cat_c.id,
    category_name: "Greek & Roman"
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
    category_id: cat_ae_cb.id
)
    helpful_vote_count = rand(1..15)
    total_vote_count = helpful_vote_count + rand(1..5)

    body = Faker::Food.description + " \n "
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " \n " 
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote
Review.create!(
    title: Faker::Cosmere.surge + " | " + Faker::Movies::Ghostbusters.actor,
    body: body,
    book_id: b.id,
    user_id: demoUser.id,
    review_type: 'user',
    rating_overall: rand(1..5),
    rating_performance: rand(1..5),
    rating_story: rand(1..5),
    helpful_vote_count: helpful_vote_count,
    total_vote_count: total_vote_count,
)

    helpful_vote_count = rand(1..15)
    total_vote_count = helpful_vote_count + rand(1..5)
    body += Faker::Food.description + " \n "
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " \n " 
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote
Review.create!(
    title: Faker::Cosmere.surge + " | " + Faker::Movies::Ghostbusters.actor,
    body: body,
    book_id: b.id,
    user_id: demoUser.id+1,
    review_type: 'user',
    rating_overall: rand(1..5),
    rating_performance: rand(1..5),
    rating_story: rand(1..5),
    helpful_vote_count: helpful_vote_count,
    total_vote_count: total_vote_count,
)

    helpful_vote_count = rand(1..15)
    total_vote_count = helpful_vote_count + rand(1..5)
    body += Faker::Food.description + " \n "
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote + " \n " 
    body += Faker::Quotes::Shakespeare.romeo_and_juliet_quote
Review.create!(
    title: Faker::Cosmere.surge + " | " + Faker::Movies::Ghostbusters.actor,
    body: body,
    book_id: b.id,
    user_id: demoUser.id+1,
    review_type: 'user',
    rating_overall: rand(1..5),
    rating_performance: rand(1..5),
    rating_story: rand(1..5),
    helpful_vote_count: helpful_vote_count,
    total_vote_count: total_vote_count,
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

file = open('https://laudable-seeds.s3-us-west-1.amazonaws.com/johncleesesoanyway.jpg')

b.book_cover.attach(io: file, filename: 'johncleesesoanyway.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_ae_cb.id
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

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/lamarodomdtol.jpg'), filename: 'lamarodomtol.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_ae_cb.id
)



## Interviews & Panels

a = ContentCreator.create!(fname: 'Bruce', lname: 'Lee')

n = ContentCreator.create!(fname: 'Pierre', lname: 'Berton')

b = Book.create!(
    title: 'The Lost Interview',
    subtitle: '',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "Bruce Lee's in-depth interview at the Pierre Berton Show, originally recorded in 1971, just a couple of years before he passed away. The interview was lost and would not be found and aired again until 1994.

©2018 BN Publishing (P)2018 BN Publishing",
    release_date: DateTime.new(2019,7,19),
    length_in_minutes: 24,
    price_in_cents: 349,
    language: 'english',
    publisher: "BN Publishing"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/brucelee.jpg'), filename: 'brucelee.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_ae_ip.id
)

a = ContentCreator.create!(fname: 'Caseen', lname: 'Gaines')

n = ContentCreator.create!(fname: 'Ron', lname: 'Butler')

b = Book.create!(
    title: "We Don't Need Roads",
    subtitle: 'The Making of the Back to the Future Trilogy',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "Long before Marty McFly and Doc Brown traveled through time in a flying DeLorean, director Robert Zemeckis and his friend and writing partner Bob Gale worked tirelessly to break into the industry with a hit. For the first time ever, the story of how these two young filmmakers struck lightning is being told by those who witnessed it. We Don't Need Roads includes original interviews with Zemeckis, Gale, Christopher Lloyd, Lea Thompson, Huey Lewis, and over 50 others who contributed to one of the most popular and profitable film trilogies of all time. With a focus not only on the movies but also on the lasting impact of the franchise and its fandom, We Don't Need Roads is the ultimate audiobook for anyone who has ever wanted to ride a hoverboard, hang from the top of a clock tower, travel through the space-time continuum, or find out what really happened to Eric Stoltz after the first six weeks of filming.

©2015 Caseen Gaines (P)2015 Tantor",
    release_date: DateTime.new(2015,6,23),
    length_in_minutes: (8*60)+21,
    price_in_cents: 2659,
    language: 'english',
    publisher: "Tantor Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/backtothefuture.jpg'), filename: 'backtothefuture.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_ae_ip.id
)


#### Bios & Memoirs

## Science & Technology Leaders


a = ContentCreator.create!(fname: 'Ashlee', lname: 'Vance')

n = ContentCreator.create!(fname: 'Fred', lname: 'Sanders')

b = Book.create!(
    title: "Elon Musk",
    subtitle: 'Tesla, SpaceX, and the Quest for a Fantastic Future',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers.

Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.

Vance uses Musk's story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes, and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy.

©2015 Ashlee Vance (P)2015 HarperCollins Publishers",
    release_date: DateTime.new(2015,5,19),
    length_in_minutes: (13*60)+23,
    price_in_cents: 3422,
    language: 'english',
    publisher: "HarperAudio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/elonmusk.jpg'), filename: 'elonmusk.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_bm_stl.id
)
a = ContentCreator.create!(
    fname: 'Brad', 
    lname: 'Stone'
)

n = ContentCreator.create!(
    fname: 'Pete', 
    lname: 'Larkin'
)

b = Book.create!(
    title: "The Everything Store",
    subtitle: 'Jeff Bezos and the Age of Amazon',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "Audie Award Finalist, Business/Educational, 2014

The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos.

Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now.

Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing.

The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.

©2013 Brad Stone (P)2013 Hachette Audio",
    release_date: DateTime.new(2013,10,15),
    length_in_minutes: (13*60)+2,
    price_in_cents: 2850,
    language: 'english',
    publisher: "Hachette Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/jeffbezos.jpg'), filename: 'jeffbezos.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_bm_stl.id
)

#### Sci Fi & Fantasy

## Fantasy: Contemporary

a = ContentCreator.create!(
    fname: 'Patrick', 
    lname: 'Rothfuss'
)

n = ContentCreator.create!(
    fname: 'Nick', 
    lname: 'Podehl'
)

b = Book.create!(
    title: "The Name of the Wind",
    subtitle: '(Kingkiller Chronicle, Book 1)',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: 'Discover #1 New York Times bestselling Patrick Rothfuss’ epic fantasy series, The Kingkiller Chronicle.

“I just love the world of Patrick Rothfuss.” (Lin-Manuel Miranda)

“He’s bloody good, this Rothfuss guy.” (George R. R. Martin)

“Rothfuss has real talent.” (Terry Brooks)

OVER 1 MILLION COPIES SOLD! 

DAY ONE: THE NAME OF THE WIND

My name is Kvothe.

I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.

You may have heard of me.

So begins a tale unequaled in fantasy literature - the story of a hero told in his own voice. It is a tale of sorrow, a tale of survival, a tale of one man’s search for meaning in his universe, and how that search, and the indomitable will that drove it, gave birth to a legend. 

Praise for The Kingkiller Chronicle: 

“The best epic fantasy I read last year.... He’s bloody good, this Rothfuss guy.” (George R. R. Martin, New York Times bestselling author of A Song of Ice and Fire)

“Rothfuss has real talent, and his tale of Kvothe is deep and intricate and wondrous.” (Terry Brooks, New York Times bestselling author of Shannara)

"It is a rare and great pleasure to find a fantasist writing...with true music in the words." (Ursula K. Le Guin, award-winning author of Earthsea)

"The characters are real and the magic is true.” (Robin Hobb, New York Times bestselling author of Assassin’s Apprentice)

"Masterful.... There is a beauty to Pat\'s writing that defies description." (Brandon Sanderson, New York Times bestselling author of Mistborn)

©2009 DAW Trade (P)2009 Brilliance Audio, Inc.',
    release_date: DateTime.new(2009,5,15),
    length_in_minutes: (13*60)+23,
    price_in_cents: 3149,
    language: 'english',
    publisher: "Brilliance Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/nameofthewind.jpg'), filename: 'nameofthewind.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_sff_fc.id
)


b = Book.create!(
    title: "The Wise Man's Fear",
    subtitle: '(Kingkiller Chronicle, Book 2)',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "\"My name is Kvothe. I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. You may have heard of me.\"

So begins the tale of a hero told from his own point of view — a story unequaled in fantasy literature. Now in The Wise Man's Fear, Day Two of The Kingkiller Chronicle, an escalating rivalry with a powerful member of the nobility forces Kvothe to leave the University and seek his fortune abroad. Adrift, penniless, and alone, he travels to Vintas, where he quickly becomes entangled in the politics of courtly society.

While attempting to curry favor with a powerful noble, Kvothe uncovers an assassination attempt, comes into conflict with a rival arcanist, and leads a group of mercenaries into the wild, in an attempt to solve the mystery of who (or what) is waylaying travelers on the King's Road. All the while, Kvothe searches for answers, attempting to uncover the truth about the mysterious Amyr, the Chandrian, and the death of his parents.

Along the way, Kvothe is put on trial by the legendary Adem mercenaries, is forced to reclaim the honor of the Edema Ruh, and travels into the Fae realm. There he meets Felurian, the faerie woman no man can resist, and who no man has ever survived... until Kvothe.

In The Wise Man's Fear, Kvothe takes his first steps on the path of the hero and learns how difficult life can be when a man becomes a legend in his own time.

Not just another day: listen to more in the Kingkiller Chronicles.
©2011 Patrick Rothfuss (P)2011 Brilliance Audio, Inc.",
    release_date: DateTime.new(2011,3,3),
    length_in_minutes: (42*60)+55,
    price_in_cents: 3149,
    language: 'english',
    publisher: "Brilliance Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/wisemansfear.jpg'), filename: 'wisemansfear.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_sff_fc.id
)

a = ContentCreator.create!(
    fname: 'Brandon', 
    lname: 'Sanderson'
)

n = ContentCreator.create!(
    fname: 'Kate', 
    lname: 'Reading'
)

b = Book.create!(
    title: "The Way of Kings",
    subtitle: 'Book One of the Stormlight Archive',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: 'Widely acclaimed for his work completing Robert Jordan’s Wheel of Time saga, Brandon Sanderson now begins a grand cycle of his own, one every bit as ambitious and immersive.

Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.

It has been centuries since the fall of the 10 consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Wars were fought for them, and won by them. One such war rages on the Shattered Plains. There, Kaladin has been reduced to slavery. In a war that makes no sense, where 10 armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable.

Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity.

Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar’s niece, Jasnah. Though she genuinely loves learning, Shallan’s motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.

Download the accompanying reference guide.
©2010 Dragonsteel Entertaiment, LLC (P)2010 Macmillan Audio',
    release_date: DateTime.new(2010,8,31),
    length_in_minutes: (45*60)+29,
    price_in_cents: 6393,
    language: 'english',
    publisher: "Macmillan Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/wayofkings.jpg'), filename: 'wayofkings.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_sff_fc.id
)


a = ContentCreator.create!(
    fname: 'N. K.', 
    lname: 'Jemisin'
)

n = ContentCreator.create!(
    fname: 'Robin', 
    lname: 'Miles'
)

b = Book.create!(
    title: "The Fifth Season",
    subtitle: 'The Broken Earth, Book 1',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "This is the way the world ends. For the last time.

A season of endings has begun.

It starts with the great, red rift across the heart of the world's sole continent, spewing ash that blots out the sun.

It starts with death, with a murdered son and a missing daughter.

It starts with betrayal,and long dormant wounds rising up to fester.

This is the Stillness, a land long familiar with catastrophe, where the power of the Earth is wielded as a weapon. And where there is no mercy.

A new fantasy trilogy by Hugo, Nebula & World Fantasy Award-nominated author N. K. Jemisin.

PLEASE NOTE: When you purchase this title, the accompanying reference material will be available in your My Library section along with the audio.

©2015 N.K. Jemisin (P)2015 Hachette Audio",
    release_date: DateTime.new(2015,8,4),
    length_in_minutes: (15*60)+27,
    price_in_cents: 2850,
    language: 'english',
    publisher: "Hachette Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/fifthseason.jpg'), filename: 'fifthseason.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_sff_fc.id
)


n = ContentCreator.create!(
    fname: 'Casaundra', 
    lname: 'Freeman'
)

b = Book.create!(
    title: "The Hundred Thousand Kingdoms",
    subtitle: '',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "In this brilliantly original debut fantasy, a young woman becomes entangled in a power struggle of mythic proportions.

Yeine Darr is an outcast from the barbarian North. But when her mother dies under mysterious circumstances, she is summoned to the majestic city of Sky. There, to her shock, Yeine is named an heiress to the king. But the throne of the Hundred Thousand Kingdoms is not easily won, and Yeine is thrust into a vicious power struggle with cousins she never knew she had. As she fights for her life, she draws ever closer to the secrets of her mother's death and her family's bloody history.

With the fate of the world hanging in the balance, Yeine will learn how perilous it can be when love and hate - and gods and mortals - are bound inseparably together. 

The Inheritance Trilogy:

The Hundred Thousand Kingdoms
The Broken Kingdoms
The Kingdom of Gods
The Inheritance Trilogy (omnibus edition) 
Shades in Shadow: An Inheritance Triptych (e-only short fiction) 
The Awakened Kingdom (e-only novella) 
For more from N. K. Jemisin, check out:

Dreamblood Duology:

The Killing Moon
The Shadowed Sun
The Broken Earth:

The Fifth Season
The Obelisk Gate
The Stone Sky
©2010 N. K. Jemisin (P)2018 Hachette Audio",
    release_date: DateTime.new(2018,10,16),
    length_in_minutes: (11*60)+47,
    price_in_cents: 2850,
    language: 'english',
    publisher: "Brilliance Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/hundredthousand.jpg'), filename: 'hundredthousand.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_sff_fc.id
)

## Sci Fi Classic


a = ContentCreator.create!(
    fname: 'Frank', 
    lname: 'Herbert'
)

n = ContentCreator.create!(
    fname: 'Scott', 
    lname: 'Brick'
)
scottbrick = n

b = Book.create!(
    title: "Dune",
    subtitle: '',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: 'Here is the novel that will be forever considered a triumph of the imagination. Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Maud\'dib. He would avenge the traitorous plot against his noble family and would bring to fruition humankind\'s most ancient and unattainable dream.
A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.

Frank Herbert\'s death in 1986 was a tragic loss, yet the astounding legacy of his visionary fiction will live forever.

©1965 Frank Herbert (P)2007 Audio Renaissance, a division of Holtzbrinck Publishers LLC',
    release_date: DateTime.new(2006,12,31),
    length_in_minutes: (21*60)+2,
    price_in_cents: 4793,
    language: 'english',
    publisher: "Macmillan Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/dune.jpg'), filename: 'dune.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_sff_sfc.id
)


a = ContentCreator.create!(
    fname: 'Ray', 
    lname: 'Bradbury'
)

n = ContentCreator.create!(
    fname: 'Mark', 
    lname: 'Boyett'
)

b = Book.create!(
    title: "The Martian Chronicles",
    subtitle: '',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: 'Mars was a distant shore, and the men spread upon it in wave.... Each wave different, and each wave stronger.

Ray Bradbury is a storyteller without peer, a poet of the possible, and, indisputably, one of America\'s most beloved authors. In a much-celebrated literary career that has spanned six decades, he has produced an astonishing body of work: unforgettable novels, including Fahrenheit 451 and Something Wicked This Way Comes; essays, theatrical works, screenplays and teleplays; The Illustrated Mein, Dandelion Wine, The October Country, and numerous other superb short story collections. But of all the dazzling stars in the vast Bradbury universe, none shines more luminous than these masterful chronicles of Earth\'s settlement of the fourth world from the sun.

Bradbury\'s Mars is a place of hope, dreams, and metaphor - of crystal pillars and fossil seas - where a fine dust settles on the great, empty cities of a silently destroyed civilization. It is here the invaders have come to despoil and commercialize, to grow and to learn - first a trickle, then a torrent, rushing from a world with no future toward a promise of tomorrow. The Earthman conquers Mars...and then is conquered by it, lulled by dangerous lies of comfort and familiarity, and enchanted by the lingering glamour of an ancient, mysterious native race.

Ray Bradbury\'s The Martian Chronicles is a classic work of 20th-century literature whose extraordinary power and imagination remain undimmed by time\'s passage. In connected, chronological stories, a true grandmaster once again enthralls, delights, and challenges us with his vision and his heart - starkly and stunningly exposing in brilliant spacelight our strength, our weakness, our folly, and our poignant humanity on a strange and breathtaking world where humanity does not belong.

©1945, 1946, 1948, 1949, 1950, 1972, 1974, 1975, 1976, 1977 Ray Bradbury (P)2014 Audible Inc.',
    release_date: DateTime.new(2014,10,21),
    length_in_minutes: (7*60)+43,
    price_in_cents: 1995,
    language: 'english',
    publisher: "Audible Studiosma"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/martianchronicles.jpg'), filename: 'martianchronicles.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_sff_sfc.id
)


#### Classics

## American Literature


a = ContentCreator.create!(
    fname: 'Ken', 
    lname: 'Kesey'
)

n = ContentCreator.create!(
    fname: 'John C.', 
    lname: 'Reilly'
)

b = Book.create!(
    title: "One Flew Over the Cuckoo's Nest",
    subtitle: '50th Anniversary Edition',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "A 50th-anniversary edition of Ken Kesey's searing American classic.

Boisterous, ribald, and ultimately shattering, Ken Kesey's One Flew Over the Cuckoo's Nest has left an indelible mark on the literature of our time. Turning conventional notions of sanity and insanity on their heads, the novel tells the unforgettable story of a mental ward and its inhabitants, especially tyrannical Big Nurse Ratched and Randle Patrick McMurphy, the brawling, fun-loving new inmate who resolves to oppose her. We see the story through the eyes of Chief Bromden, the seemingly mute half-Indian patient who witnesses and understands McMurphy's heroic attempt to do battle with the powers that keep them all imprisoned.

Hailed upon its publication as a \"glittering parable of good and evil\" (The New York Times Book Review) and a \"roar of protest against middlebrow society's Rules and the invisible Rulers who enforce them\" (Time), Kesey's powerful book went on to sell millions of copies and remains as bracing and insightful today as when it was first released. This new deluxe audio edition commemorates the 50th anniversary of the original publication of the novel on February 1, 1962, and will be a must have for any literature lover.

©1990 Ken Kesey (P)2012 Penguin Audiobooks",
    release_date: DateTime.new(2012,7,31),
    length_in_minutes: (10*60)+32,
    price_in_cents: 2450,
    language: 'english',
    publisher: "Penguin Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/cuckoosnest.jpg'), filename: 'cuckoosnest.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_cla_al.id
)



a = ContentCreator.create!(
    fname: 'Michael', 
    lname: 'Chricton'
)



b = Book.create!(
    title: "Jurassic Park",
    subtitle: 'A Novel',
    author_id: a.id,
    narrator_id: scottbrick.id,
    publisher_summary: "Featured title in the 2018 PBS Great American Reads

“Frighteningly real…compelling.… It’ll keep you riveted.” —The Detroit News

An astonishing technique for recovering and cloning dinosaur DNA has been discovered. Now humankind's most thrilling fantasies have come true. Creatures extinct for eons roam Jurassic Park with their awesome presence and profound mystery, and all the world can visit them - for a price. 

Until something goes wrong.... 

In Jurassic Park, Michael Crichton taps all his mesmerizing talent and scientific brilliance to create his most electrifying technothriller.

©1990 Michael Crichton and © 2014 by Dinosaur Holdings LLC. (P)2015 Brilliance Audio, all rights reserved.",
    release_date: DateTime.new(2015,5,12),
    length_in_minutes: (15*60)+10,
    price_in_cents: 1399,
    language: 'english',
    publisher: "Brilliance Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/jurassicpark.jpg'), filename: 'jurassicpark.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_cla_al.id
)


### Greek and Roman

a = ContentCreator.create!(
    fname: 'Homer, W.H.D. Rouse', 
    lname: '- translator'
)

n = ContentCreator.create!(
    fname: 'Anthony', 
    lname: 'Heald'
)

b = Book.create!(
    title: "Homer Box Set: Iliad & Odyssey",
    subtitle: '',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "Homer’s Iliad and Odyssey are unquestionably two of the greatest epic masterpieces in Western literature. Though more than 2,700 years old, their stories of brave heroics, capricious gods, and towering human emotions are vividly timeless.

The Iliad can justly be called the world’s greatest war epic. The terrible and long-drawn-out siege of Troy remains one of the classic campaigns, the heroism and treachery of its combatants unmatched in song and story. Driven by fierce passions and loyalties, men and gods battle to a devastating conclusion.

The Odyssey chronicles the many trials and adventures Odysseus must pass through on his long journey home from the Trojan wars to his beloved wife. Though the stormy god of the ocean has sworn vengeance against him, and witches and sirens try to lure him off course, Odysseus is clever and has the brilliant goddess Athena on his side.

Homer (9th or 8th century B.C.) is the presumed author of the Iliad and the Odyssey, the two greatest epic poems of ancient Greece. Virtually nothing is known about his life. Tradition has it that he was blind. Most scholars believe he composed the Iliad and the Odyssey by relying on oral traditions. Their value lies chiefly in the poetry itself, moving from sublime passages about the gods and heroic exploits to passages expressing deep human emotion.

Public Domain (P)2008 Blackstone Audio, Inc.",
    release_date: DateTime.new(2012,4,12),
    length_in_minutes: (25*60)+2,
    price_in_cents: 1887,
    language: 'english',
    publisher: "Blackstone Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/homer.jpg'), filename: 'homer.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_cla_gr.id
)


a = ContentCreator.create!(
    fname: 'Virgil', 
    lname: ''
)

n = ContentCreator.create!(
    fname: 'Simon', 
    lname: 'Callow'
)

b = Book.create!(
    title: "The Aeneid",
    subtitle: '',
    author_id: a.id,
    narrator_id: n.id,
    publisher_summary: "Here is the much-anticipated new translation of Virgil's epic poem from the award-winning translator Robert Fagles.  

The publication of a new translation by Fagles is a literary event. His translations of both the Iliad and Odyssey have sold hundreds of thousands of copies and have become the standard translations of our era. Now, with this stunning modern verse translation, Fagles has reintroduced Virgil's Aeneid to a whole new generation, and completed the classical triptych at the heart of Western civilization.

The Aeneid is a sweeping epic of arms and heroism and a searching portrait of a man caught between love, duty, and the force of his own destiny. Here, Fagles brings to life the timeless journey of Aeneas as he flees the ashes of Troy to found Roman society and change forever the course of the Western world.

Fagles' translation retains all of the gravitas and humanity of the original as well as its powerful blend of poetry and myth.

 PLEASE NOTE: When you purchase this title, the accompanying PDF will be available in your Audible Library along with the audio.  

©2006 Robert Fagles
(P)2006 Penguin Audio, a member of Penguin Group (USA) Inc. All rights reserved.",
    release_date: DateTime.new(2006,11,2),
    length_in_minutes: (12*60)+26,
    price_in_cents: 3150,
    language: 'english',
    publisher: "Penguin Audio"
)

b.book_cover.attach(io: open('https://laudable-seeds.s3-us-west-1.amazonaws.com/aeneid.jpg'), filename: 'aeneid.jpg')

BookCategory.create!(
    book_id: b.id,
    category_id: cat_cla_gr.id
)





















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
