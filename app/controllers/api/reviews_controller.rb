class Api::ReviewsController < ApplicationController

    def index
        @Reviews = Book.find_by(id: params[:book_id].to_i).reviews
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.book_id = params[:book_id]
        
        if @review.save!
            @id = @review.id

            render :show 
        else
            render json: @review.errors.full_messages, status: 418
        end
    end

    # def update
    #     @review = Review.find_by(id: params[:review_id])

    #     @review.total_vote_count += 1
    #     @review.helpful_vote_count += 1 unless params[:vote] == false 
    
    #     if @review.save!
            
    #         render :show
    #     else
    #         render json: @review.errors.full_messages, status: 418
    #     end
    # end

    private
    def review_params
        params.require(:review).permit(:title,:body,:user_id, :rating_overall, :rating_performance, :rating_story, :total_vote_count, :helpful_vote_count, :review_type)
    end

end