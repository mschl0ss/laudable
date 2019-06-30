class CreateCollectionBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :collection_books do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :collection_type, null: false
      t.timestamps
    end

    add_index :collection_books, :user_id
    add_index :collection_books, :book_id
  end
end