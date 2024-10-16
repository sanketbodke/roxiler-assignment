Rails.application.routes.draw do
  get "pages/home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Defines the root path route ("/")
  # root "posts#index"
  root "pages#home"

  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :admin, only: [ :index ] do
        member do
          post :create_user
        end
      end
      resources :stores do
        resources :ratings, only: [ :create, :index ]
      end
      resources :users do
        member do
          get "non_admin_users"
          put :update_password
          put :verify_otp
        end
      end
      resources :stores
      resources :owners, only: [:index, :show]
    end
  end

  get "*path", to: "pages#home", via: :all
end
