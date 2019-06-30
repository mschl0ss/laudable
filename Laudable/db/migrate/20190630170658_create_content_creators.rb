class CreateContentCreators < ActiveRecord::Migration[5.2]
  def change
    create_table :content_creators do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :content_creators, :name
  end
end