Rails.application.routes.draw do
  resources :industries
  resources :companies do 
    resources :comments
  end
  post '/auth/login', to: 'authentication#login'
  get 'auth/verify' , to: 'authentication#verify'
  resources :users
  put '/companies', to: 'companies#add_comments_to_companies'
  delete '/comments/:id', to: 'comments#delete'
  get '/comments/:id', to: 'comments#show'
  put '/comments/:id', to: 'comments#update'
end