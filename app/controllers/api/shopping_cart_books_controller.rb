class Api::ShoppingCartBooksController < ApplicationController

    def create

        
        @cart_book = ShoppingCartBook.new(user_id: params[:user_id], book_id: params[:book_id])

        if @cart_book.save
            render 'api/users/show'
        else
            render json: ['Shopping Cart Book create failed'], status: 418
        end

    end
end