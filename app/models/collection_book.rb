# == Schema Information
#
# Table name: collection_books
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  book_id         :integer          not null
#  collection_type :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class CollectionBook < ApplicationRecord

    validates :collection_type, inclusion: {
        in: %w(library wishlist),
        message: "%{value} is not a valid collection type" }

    belongs_to :user
    belongs_to :book
end
