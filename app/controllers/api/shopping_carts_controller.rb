class Api::ShoppingCartsController < ApplicationController

    def create
        user = User.find_by_id(params[:user_id])
        @shopping_cart = ShoppingCart.new(user.id)

        # if they have any shopping carts, grab the most recent
        # and save it, so that the updated_at field correctly reflects
        # the date that shopping cart was bought out
        if user.shopping_carts.length > 0
            user.shopping_carts.last.save!
        end

        if @shopping_cart.save
            render 'api/users/show'
        else
            render json: ['Shopping Cart create failed'], status: 418
        end

    end

    # def update
    #     user = User.find_by_id(params[:user_id])
    #     cart = ShoppingCart.find_by_id(params[:id])
    # end
end