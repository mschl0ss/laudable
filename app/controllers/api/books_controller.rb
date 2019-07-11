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
            books = Book.where('lower(title) LIKE ?', "%#{params[:query].downcase}%")

            @books = books.map do |book|
                OpenStruct.new(
                    id: book.id, title: book.title, 
                    author_id: book.author.id, author: book.author.fname + ' ' + book.author.lname,
                    narrator_id: book.narrator.id, narrator: book.narrator.fname + ' ' + book.narrator.lname,
                    length_in_minutes: book.length_in_minutes,
                    release_date: book.release_date,
                    book_cover: book.book_cover
                    )
            end
         
        else
            @books = Book.none
        end
       

        render :search
    end
end