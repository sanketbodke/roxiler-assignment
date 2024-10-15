module Api
  module V1
    class AdminController < BaseController
      def index
        render json: {
          total_users: User.count,
          total_stores: Store.count,
          total_ratings: Rating.count
        }
      end
    end
  end
end
