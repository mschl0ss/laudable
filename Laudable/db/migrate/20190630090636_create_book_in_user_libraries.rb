class CreateBookInUserLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :book_in_user_libraries do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false

      t.timestamps
    end

    add_index :book_in_user_libraries, :user_id
    add_index :book_in_user_libraries, :book_id
  end
end
