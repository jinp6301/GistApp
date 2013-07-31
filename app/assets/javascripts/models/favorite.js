GA.Models.Favorite = Backbone.Model.extend({
  initialize: function(id){
    this.url = "gists/" + id + "/favorites"
  }
})