class GistsController < ApplicationController

  def index
    @gists = current_user.gists
    p @gists.to_json
    render json: @gists.to_json
  end

  def create
    @gist = Gist.new(params[:gist])
    @gist.user_id = current_user.id

    if @gist.save
      render json: @gist
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def destroy
    @gist = Gist.find(params[:id])
    @gist.destroy

    render json: @gist
  end

  def update
    @gist = Gist.find(params[:id])
    if @gist.save
      render json: @gist
    else
      render json: { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  # def as_json(options={})
  #   bool = current_user.gists
  #   super(options.merge(include: bool))
  # end
end
