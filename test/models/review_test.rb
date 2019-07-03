# == Schema Information
#
# Table name: reviews
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  body               :text             not null
#  book_id            :integer          not null
#  user_id            :integer          not null
#  review_type        :string           not null
#  rating_overall     :integer
#  rating_performance :integer
#  rating_story       :integer
#  helpful_score      :integer          default(0)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
