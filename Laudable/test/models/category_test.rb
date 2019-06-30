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

require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
