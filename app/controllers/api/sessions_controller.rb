class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            log_in(@user)
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