Rails.application.routes.draw do
  scope '/api' do
    resources :drinks
  end

  root to: 'pages#index'

  get '*path', to: 'pages#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
