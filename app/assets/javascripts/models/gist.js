GA.Models.Gist = Backbone.Model.extend({

  initialize: function(response) {
    this.attributes = this.parse(response)
  },

  parse: function(response) {
    var that = this;

    var fav = new GA.Models.Favorite(this.id)
    fav.fetch({
      success: function(data){
        if (data){
          response.favorite = fav;
        }
      },
    })

    return response;
  }
});