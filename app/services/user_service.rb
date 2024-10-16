class UserService
  def initialize(user)
    @user = user
  end

  def update_password(current_password, new_password, password_confirmation)
    if @user.valid_password?(current_password)
      if @user.update(password: new_password, password_confirmation: password_confirmation)
        "Password updated successfully"
      else
        @user.errors.full_messages.join(", ")
      end
    else
      "Current Password Incorrect"
    end
  end
end
