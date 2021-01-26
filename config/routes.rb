Rails.application.routes.draw do
  resources :industries
  resources :companies
  post '/auth/login', to: 'authentication#login'
  get 'auth/verify' , to 'authentication#verify'
  resources :users
  put 'users/:users/company/:id'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :teachers
  
end