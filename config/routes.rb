Rails.application.routes.draw do
  namespace :api do
    resources :products, only: [:index, :update]
    resources :orders, only: [:show, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
