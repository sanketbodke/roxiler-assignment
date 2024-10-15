module Api
  module V1
    class RatingsController < BaseController
      before_action :set_store, only: [ :index, :create ]

      def index
        @ratings = @store.ratings.includes(:user)

        render json: @ratings.map { |rating|
          rating.as_json.merge(
            user: rating.user,
            store: @store
          )
        }
      end

      def create
        rating = @store.ratings.new(rating_params)
        rating.user = @current_user

        if valid_score?(rating.score) && rating.save
          render json: { rating: rating, store: @store, user: @current_user }, status: :created
        else
          if !valid_score?(rating.score)
            errors = [ "Score must be between 1 and 5" ]
          else
            errors = rating.errors.full_messages
          end
          render json: { errors: errors }, status: :unprocessable_entity
        end
      end

      private

      def set_store
        @store = Store.find(params[:store_id])
      end

      def rating_params
        params.require(:rating).permit(:score)
      end

      def valid_score?(score)
        score.between?(1, 5)
      end
    end
  end
end
