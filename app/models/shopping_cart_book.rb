# == Schema Information
#
# Table name: shopping_cart_books
#
#  id               :bigint           not null, primary key
#  shopping_cart_id :integer          not null
#  book_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class ShoppingCartBook < ApplicationRecord

    validates :shopping_cart_id, :book_id, presence: true

    belongs_to :shopping_cart
    belongs_to :book
end
