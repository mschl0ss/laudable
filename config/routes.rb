Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

   
   
  namespace :api, defaults: { format: :json } do
    resources :users, only: %w(index show create) do 
      resources :shopping_cart, only: %w(create update)
      resources :shopping_cart_books, only: %w(create destroy)
    end
    
    resources :categories, only: %w(index show)

    # resources :book_categories, only: %w(index)

    get 'books/search', to: 'books#search'
    resources :books, only: %w(index show) do
      resources :book_categories, only: %w(index)
      resources :reviews, only: %w(index create update)
    end
    

    resources :content_creators, only: %w(index show)
    
    resource :session, only: [:create, :destroy]

    
  end
   root to: 'static_pages#root'
end
