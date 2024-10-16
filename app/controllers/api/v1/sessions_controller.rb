module Api
  module V1
    class SessionsController < BaseController
      skip_before_action :authenticate_request, only: [ :create ]

      def create
        user = User.find_by(email: params[:email])
        if user&.valid_password?(params[:password])
          token = JwtHelper.encode(user_id: user.id)
          user_roles = user.roles.pluck(:name)
          render json: { status: "success", message: "Logged in successfully.", user:, token:, role: user_roles }, status: :ok
        else
          render json: { status: "error", message: "Invalid username or password." }, status: :unauthorized
        end
      end
    end
  end
end
