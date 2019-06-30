# == Schema Information
#
# Table name: book_categories
#
#  id          :bigint           not null, primary key
#  book_id     :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class BookCategory < ApplicationRecord

    validates :book_id, :category_id, presence: true
    belongs_to :book
    belongs_to :category

end
