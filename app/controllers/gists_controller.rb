class GistsController < ApplicationController

  def index
    @gists = current_user.gists
    # respond_to do |format|
    #   format.html {render :index}
    #   format.json {render json: @gists }
    # end
    render json: @gists
  end

  def create
    @gist = Gist.new(params[:gist])
    if @gist.save
      render json: @gist
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end
