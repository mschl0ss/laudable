# == Schema Information
#
# Table name: books
#
#  id                :bigint           not null, primary key
#  title             :string           not null
#  author_id         :integer          not null
#  narrator_id       :integer          not null
#  publisher_summary :text             not null
#  release_date      :date
#  length_in_minutes :integer          not null
#  price_in_cents    :integer          not null
#  language          :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
