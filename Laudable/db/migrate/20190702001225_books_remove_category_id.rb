class BooksRemoveCategoryId < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :category_id
  end
end
