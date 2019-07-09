class Api::ContentCreatorsController < ApplicationController

    def index
        @content_creators = ContentCreator.all
        render :index
    end

    def show
        @content_creator = ContentCreator.find_by(id: params[:id])
        render :show
    end
end