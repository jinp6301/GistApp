class Gist < ActiveRecord::Base

  attr_accessible :title, :user_id, :gist_files_attributes

  has_many :favorites, dependent: :destroy
  has_many :gist_files, dependent: :destroy
  belongs_to :user

  accepts_nested_attributes_for :gist_files

  def as_json(options={})
    super(options.merge(methods: "fav", include: "gist_files"))
  end

  def fav
    self.favorites.pluck(:user_id).include?(self.user_id)
  end


end
