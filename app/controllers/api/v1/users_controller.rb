module Api
  module V1
    class UsersController < BaseController
      before_action :set_user, only: [ :show, :update, :destroy ]

      def index
        @users = User.includes(:roles).all

        if params[:email].present?
          @users = @users.where(email: params[:email])
        end

        if params[:role].present?
          @users = @users.joins(:roles).where(roles: { name: params[:role] })
        end

        render json: @users.as_json(include: { roles: { only: [ :name ] } })
      end

      def show
        render json: @user.as_json(include: { roles: { only: [ :name ] } })
      end

      def create
        user = User.new(user_params)

        if user.save
          user.add_role(params[:role]) if params[:role].present?  # Assign role if provided
          render json: { message: "User created successfully", user: user.as_json(include: { roles: { only: [ :name ] } }) }, status: :created
        else
          render json: { status: "error", message: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def non_admin_users
        non_admins = User.where.not(id: User.with_role(:admin).pluck(:id))

        render json: { users: non_admins }, status: :ok
      end

      def verify_otp
        otp_code = generate_otp_code
        @current_user.update(otp_code:, otp_generated_at: Time.current)
        UserMailer.otp(@current_user, otp_code).deliver_now
        render json: { message: 'OTP has been sent to your email.' }, status: :ok
      end

      def update_password
        if params[:otp_code] == @current_user.otp_code && otp_not_expired?(@current_user)
          user_service = UserService.new(@current_user)
          result = user_service.update_password(params[:current_password], params[:new_password], params[:password_confirmation])

          if result == 'Password updated successfully'
            @current_user.update(otp_code: nil, otp_generated_at: nil)
            render json: { message: result }, status: :ok
          else
            render json: { error: result }, status: :unprocessable_entity
          end
        else
          render json: { error: 'Invalid or expired OTP' }, status: :unprocessable_entity
        end
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

      def generate_otp_code
        rand(1000..9999)
      end

      def otp_not_expired?(user)
        user.otp_generated_at && user.otp_generated_at > 10.minutes.ago
      end
    end
  end
end
