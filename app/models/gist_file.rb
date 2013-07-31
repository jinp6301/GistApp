class GistFile < ActiveRecord::Base
  attr_accessible :name, :body, :gist_id

  belongs_to :gist

  # def as_json(options={})
  #   super(options.merge(methods: "fav"))
  # end
  #
  # def fav
  #   self.favorites.pluck(:user_id).include?(self.user_id)
  # end

end
