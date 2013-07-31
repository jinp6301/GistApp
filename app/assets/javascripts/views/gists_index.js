GA.Views.GistsIndex = Backbone.View.extend({
  tagName: "ul",

  render: function(){
    var that = this;

    this.collection.each(function(gist){
      var itemView = new GA.Views.GistDetail({model: gist}).render().el;
      that.$el.append(itemView)
    })

    return this;
  }
})