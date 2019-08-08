class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end
    
    def show
        @user = structUser(found_user)
    end

    def create
        user = User.new(user_params)
        
        if user.save
            # debugger
            cart = ShoppingCart.new(user_id: user.id)
            cart.save
            
            log_in(user)
            @user = structUser(user)
            render :show
        else
            render json: @user.errors.full_messages, status: 406
        end
    end

    private

    def found_user
        User.find_by(id: params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password, :repassword, :email, :city, :state)
    end
end