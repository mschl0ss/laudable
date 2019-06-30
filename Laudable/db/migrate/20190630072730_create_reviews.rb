class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :book_id, null: false
      t.integer :user_id, null: false
      t.string :review_type, null: false
      t.integer :rating_overall
      t.integer :rating_performance
      t.integer :rating_story
      t.integer :helpful_score, default: 0

      t.timestamps
    end

    add_index :reviews, :book_id
    add_index :reviews, :user_id
    
  end
end
