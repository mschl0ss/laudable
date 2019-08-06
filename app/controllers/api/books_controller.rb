class Api::BooksController < ApplicationController

    def index
        # @books = Book.all
        @books = Book.all.map do |book|
            structBook(book)
        end
        render :index
    end

    def show

        
        # @book = Book.find_by(id: params[:id])
        @book = structBook(Book.find_by(id: params[:id]))
       
        
        render :show
    end

    def search
        
        # if, in params, there is a [:query] key, then we know theres a search
        # if the query starts with the string 'category:' then we know it's a search by category
        #       (this is hardcoded on the front end when a category show page is loaded)
        # if the query starts with the string ':all:', then we know it's request to return all books
        # if neither of those keywords are present, it's a regular ol' search by title
        # each conditional ends with it's own version of selected books
        # that collection is mapped to @books using rails associations to get desired fields
        
        if params[:query].present?
            
            if params[:query].class == Hash
                
                books = Book.where(author_id: params[:query][:author_id])

            elsif params[:query][0..8] == "category:"
                categoryName = params[:query][10..-1]
                category_id = Category.where('category_name = ?', "#{categoryName}")[0].id
                bcs = BookCategory.where('category_id = ?', "#{category_id}")
                books = bcs.map {|bc| bc.book}
            elsif params[:query][0..4] == ":all:"
                books = Book.all
            else
                books = Book.where('lower(title) ~ ?', "#{params[:query].downcase}")
            end

            @books = books.map do |book|
               structBook(book)
            end
            
         
        else
            @books = Book.none
        end
       

        render :search
    end

    private

    def structBook(book)
        OpenStruct.new(
            id: book.id, title: book.title, 
            author_id: book.author.id, author: book.author.fname + ' ' + book.author.lname,
            narrator_id: book.narrator.id, narrator: book.narrator.fname + ' ' + book.narrator.lname,
            category: book.categories.first, parent_category: book.categories.first.parent_category,
            language: book.language,
            publisher_summary: book.publisher_summary,
            length_in_minutes: book.length_in_minutes,
            release_date: book.release_date,
            book_cover: book.book_cover,
            total_reviews: book.reviews.count,
            price_dollars: book.price_in_cents / 100,
            price_cents: book.price_in_cents % 100
            )
    end

end