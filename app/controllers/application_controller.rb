class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    #crlll

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def require_logged_in
        redirect_to new_session_url unless logged_in?

    end

    def require_logged_out
        # probs redirect to no session splash
        # redirect_to new_session_url if logged_in?

    end

    def log_in(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def log_out
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def structUser(user)
        OpenStruct.new(
            id: user.id,
            username: user.username,
            email: user.email,
            city: user.city,
            state: user.state,
            reviewed_book_ids: user.reviewed_book_ids,
            library_books: user.library_books,
            wishlist_books: user.wishlist_books,
            shopping_cart_books: user.shopping_carts.last.shopping_cart_books,
        )
    end

end
