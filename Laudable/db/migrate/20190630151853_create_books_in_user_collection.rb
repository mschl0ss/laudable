class CreateBooksInUserCollection < ActiveRecord::Migration[5.2]
  def change
    create_table :books_in_user_collection do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :collection_type, null: false
      t.timestamps
    end

    add_index :books_in_user_collection, :user_id
    add_index :books_in_user_collection, :book_id
  end
end
