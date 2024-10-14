# frozen_string_literal: true

class User < ApplicationRecord
  rolify

  after_create :assign_default_role
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, presence: true

  def assign_default_role
    self.add_role(:newuser) if self.roles.blank?
  end
end
