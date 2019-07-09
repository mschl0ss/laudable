class Api::BookCategoriesController < ApplicationController

    def index
        @BookCategories = BookCategory.all
        render :index
    end
end