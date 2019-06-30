# == Schema Information
#
# Table name: collection_books
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  book_id         :integer          not null
#  collection_type :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class CollectionBookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
