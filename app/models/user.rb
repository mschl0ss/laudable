# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  city            :string
#  state           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :email, uniqueness: true, presence: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6}, allow_nil: true
    validate :check_password_equals_repassword
    

    attr_reader :password, :repassword
    # attr_accessor 

    after_initialize :ensure_session_token

    has_many :reviews
    has_many :shopping_carts
   
    has_many :library_books,
    -> { where collection_type: 'library'},
        foreign_key: :user_id,
        class_name: :CollectionBook

    has_many :wishlist_books,
    -> { where collection_type: 'wishlist'},
        foreign_key: :user_id,
        class_name: :CollectionBook
 
    has_many :books_in_cart, through: :shopping_carts, source: :books

    #spire

    def shopping_cart_books
        cart = self.shopping_carts.last

        cart.shopping_cart_books
    end
    def password=(password)
        @password=password
        self.password_digest = BCrypt::Password.create(password)
    end

    def repassword=(repassword)
        @repassword = repassword
    end
  
    def check_password_equals_repassword
        errors.add(:base, "Passwords must match") unless @password == @repassword || @repassword.nil?
    end

    def self.find_by_credentials(username,password)
        @user = User.find_by(username: username)
        return nil unless @user
        @user.is_password?(password) ? @user : nil
    end

    

    def is_password?(password)
        @password=password
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reviewed_book_ids
        @review_ids = self.reviews.map do |review_obj|
            review_obj.book_id
        end
        return @review_ids
    end

end
