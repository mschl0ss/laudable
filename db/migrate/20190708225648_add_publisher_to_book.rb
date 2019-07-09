class AddPublisherToBook < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :publisher, :string
  end
end
