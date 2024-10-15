module Api
  module V1
    class UsersController < BaseController
      before_action :set_user, only: [:show, :update, :destroy]

      def index
        @users = User.includes(:roles).all
        render json: @users.as_json(include: { roles: { only: [:name] } })
      end

      def show
        render json: @user.as_json(include: { roles: { only: [:name] } })
      end

      def create
        user = User.new(user_params)

        if user.save
          user.add_role(params[:role]) if params[:role].present?  # Assign role if provided
          render json: { message: "User created successfully", user: user.as_json(include: { roles: { only: [:name] } }) }, status: :created
        else
          render json: { status: "error", message: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def non_admin_users
        non_admins = User.where.not(id: User.with_role(:admin).pluck(:id))

        render json: { users: non_admins }, status: :ok
      end

      def destroy
        @user.destroy
        head :no_content
      end

      private

      def set_user
        @user = User.find(params[:id])
      end

      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
    end
  end
end