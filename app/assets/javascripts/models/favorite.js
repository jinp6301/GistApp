GA.Models.Favorite = Backbone.Model.extend({
  initialize: function(id, options){
    this.url = "gists/" + id + "/favorites"
  }
})