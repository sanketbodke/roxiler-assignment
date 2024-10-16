module Api
  module V1
    class OwnersController < BaseController
      def index
        @owners = User.joins(:roles)
                      .where(roles: { name: "owner" })
                      .distinct

        render json: @owners.as_json(include: { roles: { only: [ :name ] } }), status: :ok
      end


      def show
        user = User.find(params[:id])
        store = user.stores

        if store
          render json: store.as_json(include: { ratings: { only: [ :id, :score ] } }), status: :ok
        else
          render json: { error: "Store not found" }, status: :not_found
        end
      end
    end
  end
end
