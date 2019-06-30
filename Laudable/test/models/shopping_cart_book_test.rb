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

require 'test_helper'

class ShoppingCartBookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
