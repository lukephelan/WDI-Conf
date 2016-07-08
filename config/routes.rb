Rails.application.routes.draw do
  resources :seatings
  root to: "home#index"
end
