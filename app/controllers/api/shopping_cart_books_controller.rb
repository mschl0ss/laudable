class Api::ShoppingCartBooksController < ApplicationController

    def index
        user = User.find_by_id(params[:user_id])
        @books = user.shopping_cart_books

        render 'api/books/index'

    end

    def create

        # debugger;
        @user = User.find_by_id(params[:user_id])
        
        cart_book = ShoppingCartBook.new(shopping_cart_id: @user.shopping_carts.last.id, book_id: params[:book_id])

        if cart_book.save
            render 'api/users/show'
        else
            render json: ['Shopping Cart Book create failed'], status: 418
        end

    end
end