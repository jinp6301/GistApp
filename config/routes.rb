SessionsTemplate::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]
  resources :gists, only: [:index, :create, :destroy] do
    resource :favorites, only: [:create, :destroy, :show, :update]
  end
  resources :favorites, only: [:index]
  root :to => "roots#show"
end
