# == Schema Information
#
# Table name: shopping_carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShoppingCart < ApplicationRecord

    validates :user_id, presence: true, uniqueness: true

    belongs_to :user
    has_many :shopping_cart_books
    has_many :books, through: :shopping_cart_books, source: :book
end
