Rails.application.routes.draw do
  resources :industries
  resources :companies
  post '/auth/login', to: 'authentication#login'
  get 'auth/verify' , to: 'authentication#verify'
  resources :users
  put '/companies', to: 'companies#add_comments_to_companies'
end