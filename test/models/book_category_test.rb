# == Schema Information
#
# Table name: book_categories
#
#  id          :bigint           not null, primary key
#  book_id     :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BookCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
