class PagesController < ApplicationController
  def home
    render json: { message: "pages" }
  end
end
