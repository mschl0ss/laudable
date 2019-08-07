class Api::SessionsController < ApplicationController

    def create
        user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        

        if user
            if user.shopping_carts.length > 0
                ShoppingCart.new(user_id: user.id).save
            end
            
            log_in(user)
            @user = structUser(user)
            render 'api/users/show'
        else
            render json: ['Bad username or password'], status: 418
        end
    end

    def destroy
        log_out
        render json: { message: 'Logout successful.' }
    end

end