class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end
    
    def show
        @user = found_user
    end

    def create
        @user = User.new(user_params)

        if @user.save!
            # log_in(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 418
        end
    end

    private

    def found_user
        User.find_by(id: params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password, :email, :city, :state)
    end
end