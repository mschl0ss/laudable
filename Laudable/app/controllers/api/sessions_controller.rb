class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            log_in(@user)
            # debugger
            # render `api/users/#{@user.id}`
            # render api_users_url(@user)
            render 'api/users/show'
        else
            render json: ['nu uh.  no log in for you'], status: 418
        end
    end

    def destroy
        log_out
        render json: { message: 'Logout successful.' }
    end

end