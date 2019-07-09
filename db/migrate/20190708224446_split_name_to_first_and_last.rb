class SplitNameToFirstAndLast < ActiveRecord::Migration[5.2]
  def change
    remove_column :content_creators, :name
    add_column :content_creators, :fname, :string
    add_column :content_creators, :lname, :string
  end
end
