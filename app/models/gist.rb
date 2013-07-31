class Gist < ActiveRecord::Base

  attr_accessible :title, :user_id

  has_many :favorites, dependent: :destroy

  belongs_to :user

  def as_json(options={})
    super(options.merge(methods: "fav"))
  end

  def fav
    self.favorites.pluck(:user_id).include?(self.user_id)
  end

end
