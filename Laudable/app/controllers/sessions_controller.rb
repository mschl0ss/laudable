class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            log_in(@user)
            render 'api/users/show'
        else
            render json: ['nu uh.  no log in for you'], status: 418
        end
    end
end