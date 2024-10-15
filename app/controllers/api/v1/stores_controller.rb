module Api
  module V1
    class StoresController < BaseController
      before_action :set_store, only: [ :show, :update, :destroy ]

      def index
        stores = Store.includes(:user)

        if params[:name].present?
          stores = stores.where("stores.name ILIKE ?", "%#{params[:name]}%")
        end

        if params[:address].present?
          stores = stores.where("stores.address ILIKE ?", "%#{params[:address]}%")
        end

        render json: stores, include: :user
      end

      def create
        user = User.find(params[:user_id])

        store = Store.new(store_params)
        store.user = user

        if store.save
          render json: { message: "Store created successfully", store:, owner: store.user }
        else
          render json: { status: "error", message: store.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @store.update(store_params)
          render json: { message: "Store updated successfully", store: @store }
        else
          render json: { status: "error", message: @store.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @store.destroy
        render json: { message: "Store deleted successfully" }
      end

      private

      def set_store
        @store = Store.find(params[:id])
      end

      def store_params
        params.require(:store).permit(:name, :email, :address)
      end
    end
  end
end
