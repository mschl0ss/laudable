class Api::BooksController < ApplicationController

    def index
        @books = Book.all
        render :index
    end

    def show

        
        @book = Book.find_by(id: params[:id])
        render :show
    end

    def search

        if params[:query].present?
            @books = Book.where('lower(title) LIKE ?', "%#{params[:query].downcase}%")
        else
            @books = Book.none
        end
       

        render :search
    end
end