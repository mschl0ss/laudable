class CreateShoppingCartBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_cart_books do |t|
      t.integer :shopping_cart_id, null: false
      t.integer :book_id, null: false

      t.timestamps
    end

    add_index :shopping_cart_books, :shopping_cart_id
    add_index :shopping_cart_books, :book_id
  end
end
