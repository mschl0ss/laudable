class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :narrator_id, null: false
      t.integer :category_id, null: false
      t.text :publisher_summary, null: false
      t.date :release_date
      t.integer :length_in_minutes, null: false
      t.integer :price_in_cents, null: false
      t.string :language, null: false

      t.timestamps
    end

    add_index :books, :title
    add_index :books, :author_id
    add_index :books, :narrator_id
    add_index :books, :category_id
  end
end