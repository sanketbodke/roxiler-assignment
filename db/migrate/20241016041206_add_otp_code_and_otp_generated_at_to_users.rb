class AddOtpCodeAndOtpGeneratedAtToUsers < ActiveRecord::Migration[7.2]
  def change
    add_column :users, :otp_code, :string
    add_column :users, :otp_generated_at, :datetime
  end
end
