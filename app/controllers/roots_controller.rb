class RootsController < ApplicationController


  def show
    @gists = current_user.gists
  end



end