Rails.application.routes.draw do
  get 'registrations/new'

  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  devise_for :users, path: "", controllers: { sessions: "sessions", registrations: "registrations" }
                               # path_names: { sign_in: 'login', password: 'forgot', confirmation: 'confirm',
                                               # unlock: 'unblock', sign_up: 'register', sign_out: 'signout'}

  root to: 'welcome#index'

  # this needs to be replaced piece by piece, but there isn't much at all so it should
  # be pretty straightforward work

  # namespace :api do
  #   namespace :v1 do
  #     resources :characters, only: [:index, :create, :destroy, :update]
  #
  #     get '/characters/:id', to: 'characters#get_character_info'
  #     put '/characters/delete_all', to: 'characters#delete_all'
  #
  #     resources :items, only: [:index, :create, :destroy, :update]
  #   end
  # end
end
