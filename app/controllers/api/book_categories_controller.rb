class Api::BookCategoriesController < ApplicationController

    # def index
    #     @BookCategories = BookCategory.all
    #     render :index
    # end

    def index
        
        @BookCategories = BookCategory.all.select { |bc| bc.book_id == params[:book_id].to_i}
        render :index
    end
end