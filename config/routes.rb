Rails.application.routes.draw do
  scope '/api' do
    resources :suppliers, only: [:index, :show]
    resources :customers, only: [:index, :show]
  end

  root to: 'pages#index'

  get '*path', to: 'pages#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
