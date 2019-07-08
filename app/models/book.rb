# == Schema Information
#
# Table name: books
#
#  id                :bigint           not null, primary key
#  title             :string           not null
#  author_id         :integer          not null
#  narrator_id       :integer          not null
#  publisher_summary :text             not null
#  release_date      :date
#  length_in_minutes :integer          not null
#  price_in_cents    :integer          not null
#  language          :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Book < ApplicationRecord

       languages = [
        'english',
        'spanish',
        'chinese',
        'tagalog',
        'vietnamese',
        'arabic',
        'hebrew'
    ]

    validates :language, inclusion: {in: languages, message: "%{value} is not in the list of languages"}
    validates :title, :publisher_summary, :length_in_minutes, :price_in_cents, null: false

    has_many :reviews
    has_many :book_categories
    has_many :categories, through: :book_categories, source: :category
    has_many :shopping_cart_books
    has_many :shopping_carts, through: :shopping_cart_books, source: :shopping_cart


    #active storage
    has_one_attached :photo
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :ContentCreator

    belongs_to :narrator,
        foreign_key: :narrator_id,
        class_name: :ContentCreator

end
