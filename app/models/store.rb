class Store < ApplicationRecord
  belongs_to :user
  has_many :ratings, dependent: :destroy

  validates :name, presence: true, length: { minimum: 20, maximum: 60 }
  validates :address, presence: true, length: { maximum: 400 }
  validates :email, presence: true
end
