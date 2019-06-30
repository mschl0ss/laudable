# == Schema Information
#
# Table name: content_creators
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ContentCreator < ApplicationRecord

    has_many :narrated_books,
        foreign_key: :narrator_id,
        class_name: :Book

    has_many :authored_books,
        foreign_key: :author_id,
        class_name: :Book
end
