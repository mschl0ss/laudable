# == Schema Information
#
# Table name: categories
#
#  id                 :bigint           not null, primary key
#  parent_category_id :integer
#  category_name      :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Category < ApplicationRecord

    validates :category_name, presence: true

    has_many :book_categories
    has_many :books, through: :book_categories, source: :book

    belongs_to :parent_category,
        foreign_key: :parent_category_id,
        class_name: :Category,
        optional: true

    has_many :child_categories,
        foreign_key: :parent_category,
        class_name: :Category

    has_many :child_books,
        through: :child_categories,
        source: :books
    
end
