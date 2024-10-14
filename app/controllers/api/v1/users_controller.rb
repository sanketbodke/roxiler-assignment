module Api
  module V1
    class UsersController < BaseController
      def index
        @users = User.all

        render json: @users
      end

      private

      def set_user
        @user = User.find(params[:id])
      end
    end
  end
end
