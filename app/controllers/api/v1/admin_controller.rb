module Api
  module V1
    class AdminController < BaseController
      DEFAULT_PASSWORD = "password123"
      def index
        render json: {
          total_users: User.count,
          total_stores: Store.count,
          total_ratings: Rating.count
        }
      end

      def create_user
        user = User.new(user_params)
        user.password = DEFAULT_PASSWORD

        if user.save
          user.add_role(params[:role]) if params[:role].present?
          UserMailer.profile_create(user.email, DEFAULT_PASSWORD).deliver_now
          render json: { message: "User created successfully", user: user.as_json(include: { roles: { only: [ :name ] } }) }, status: :created
        else
          render json: { status: "error", message: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private
      def user_params
        params.require(:user).permit(:email)
      end
    end
  end
end
