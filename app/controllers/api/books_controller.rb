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
            
            if params[:query][0..7] == "category"
                categoryName = params[:query][10..-1]
                category_id = Category.where('category_name = ?', "#{categoryName}")[0].id
                
                
                bcs = BookCategory.where('category_id = ?', "#{category_id}")
                
                books = bcs.map {|bc| bc.book}
            else
                books = Book.where('lower(title) LIKE ?', "%#{params[:query].downcase}%")
            end

            @books = books.map do |book|
                OpenStruct.new(
                    id: book.id, title: book.title, 
                    author_id: book.author.id, author: book.author.fname + ' ' + book.author.lname,
                    narrator_id: book.narrator.id, narrator: book.narrator.fname + ' ' + book.narrator.lname,
                    length_in_minutes: book.length_in_minutes,
                    release_date: book.release_date,
                    book_cover: book.book_cover,
                    total_reviews: book.reviews.count,
                    price_dollars: book.price_in_cents / 100,
                    price_cents: book.price_in_cents % 100
                    )
            end
            
         
        else
            @books = Book.none
        end
       

        render :search
    end

end