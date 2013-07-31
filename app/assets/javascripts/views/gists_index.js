GA.Views.GistsIndex = Backbone.View.extend({
  tagName: "ul",

  initialize: function() {
    var that = this;
    var renderCallback = that.render.bind(that);

    that.listenTo(this.collection, "change", renderCallback),
    that.listenTo(this.collection, "add", renderCallback),
    that.listenTo(this.collection, "delete", renderCallback)

  },

  render: function(){
    var that = this;
    that.$el.html('');
    this.collection.each(function(gist){
      var itemView = new GA.Views.GistDetail({model: gist}).render().el;
      that.$el.append(itemView)
    });
    this.$el.append('<a href="/#gists/new">New Gist</a>');
    return this;
  }
})