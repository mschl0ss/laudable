Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

   
   
  namespace :api, defaults: { format: :json } do
    resources :users, only: %w(index show create)
    
    resources :categories, only: %w(index show) do 
      resources :books, only: %w(index)
    end

    resources :books, only: %w(show)
    # resources :users, only: [:index, :show, :create]
    
    resource :session, only: [:create, :destroy]
    
  end
   root to: 'static_pages#root'
end
