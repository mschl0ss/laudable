class CreateBookCategoriesAgain < ActiveRecord::Migration[5.2]
  def change
     def change
      create_table :book_categories do |t|
      t.integer :book_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end

    add_index :book_categories, :book_id
    add_index :book_categories, :category_id
  end
  end
end
