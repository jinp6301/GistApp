class FavoritesController < ApplicationController

  def index
    @favorites = current_user.favorites

    render json: @favorites
  end

  def create
    @favorite = Favorite.new(params[:favorite])
    @favorite.user_id = current_user.id

    if @favorite.save
      render json: @favorite
    else
      render :json => { error: "invalid url" }, status: 422
    end

  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy

    render json: @favorite
  end

  def show
    @favorite = Favorite.find_by_gist_id_and_user_id(params[:gist_id], current_user.id)
    if @favorite
      render json: @favorite
    else
      render :json => { error: "invalid url" }, status: 422
    end
  end

  def update
    @favorite = Favorite.find(params[:id])
    if @favorite.save
      render json: @favorite
    else
      render :json => { error: "invalid url" }, status: 422
    end
  end
end
