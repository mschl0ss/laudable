class BooksAddCategoryId < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :category_id, :integer, null: false
  end
end
