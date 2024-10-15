module Api
  module V1
    class AdminController < BaseController
      def index
        render json: {
          total_users: User.count,
          total_stores: Store.count,
          total_ratings: Rating.count
        }
      end

      def create_user
        user = User.new(user_params)

        if user.save
          user.add_role(params[:role])
          render json: { message: "User created successfully", user: }
        else
          render json: { status: "error", message: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def create_store
        user = User.find(params[:user_id])

        store = Store.new(store_params)
        store.user = user

        if store.save
          render json: { message: "Store created successfully", store:, "owner": store.user }
        else
          render json: { status: "error", message: store.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end

      def store_params
        params.require(:store).permit(:name, :email, :address)
      end
    end
  end
end
