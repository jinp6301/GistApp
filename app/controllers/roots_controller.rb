class RootsController < ApplicationController
  include SessionsHelper

  def show
    @gists = current_user.gists
  end

end