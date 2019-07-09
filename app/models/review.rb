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
#  helpful_vote_count :integer          default(0)
#  total_vote_count   :integer          default(0)
#

class Review < ApplicationRecord

    validates :title, :body, presence: true, uniqueness: true
    
    validates :review_type, inclusion: { in: %w(user critic editor),
        message: "%{value} is not a valid review type" }

    belongs_to :book
    belongs_to :user
end
