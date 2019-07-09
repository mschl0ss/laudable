class AddTotalHelpfulVotesCastToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :total_vote_count, :integer, default: 0
  end
end
