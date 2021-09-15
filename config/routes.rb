Rails.application.routes.draw do
  

  # resources :random_image_widgets
  # resources :text_box_widgets

  resources :projects, except: [:update, :show]

  #get '/:username/projects', to: 'projects#index'


  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'

  post '/widgets', to: 'widgets#create'
  delete '/widgets/:id', to: 'widgets#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
