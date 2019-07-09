class AddHelpfulVoteCountToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :helpful_vote_count, :integer, default: 0
  end
end
