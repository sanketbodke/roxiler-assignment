class Store < ApplicationRecord
  belongs_to :user
  has_many :ratings, dependent: :destroy

  validates :name, :email, :address, presence: true
end
