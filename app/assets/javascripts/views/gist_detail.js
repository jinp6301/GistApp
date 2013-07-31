GA.Views.GistDetail = Backbone.View.extend({
  tagName: "li",

  initialize: function() {
    var that = this;
    var renderCallback = that.render.bind(that);

    that.listenTo(this.model, "change", renderCallback);
    that.listenTo(this.model, "add", renderCallback);
    that.listenTo(this.model, "delete", renderCallback);

  },

  events: {
    "click .favorite": "favorite",
    "click .unfavorite": "unfavorite"
  },

  favorite: function(event){
    var that = this;
    this.model.set({fav: true})
    that.model.save()

  },

  unfavorite: function(event){
    var that = this;
    this.model.set({fav: false})
  },

  render: function(){
    var that = this;

    var template = JST["gists/detail"]({model: this.model});
    this.$el.html(template);

    return this;
  }
})