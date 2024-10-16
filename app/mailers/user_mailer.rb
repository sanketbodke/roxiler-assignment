class UserMailer < ApplicationMailer
  def otp(user, otp_code)
    @user = user
    @otp_code = otp_code
    mail(to: @user.email, subject: "Your OTP Code")
  end

  def profile_create(email, password)
    @email = email
    @password = password
    mail(to: @email, subject: "Profile Created")
  end
end
