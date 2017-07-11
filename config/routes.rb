Rails.application.routes.draw do
  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :characters, only: [:index, :create, :destroy, :update]
      get '/characters/:id', to: 'characters#get_character_info'
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
end
