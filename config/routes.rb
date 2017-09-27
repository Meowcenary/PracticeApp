Rails.application.routes.draw do
  root to: 'site#index'

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  namespace :api do
    namespace :v1 do
      resources :characters, only: [:index, :create, :destroy, :update]

      get '/characters/:id', to: 'characters#get_character_info'
      put '/characters/delete_all', to: 'characters#delete_all'

      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
end
