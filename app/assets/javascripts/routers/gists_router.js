GA.Routers.Gists = Backbone.Router.extend({

  initialize: function($rootEl, gists){
    this.$rootEl = $rootEl;
    this.gists = gists;
  },

  routes: {
    "": "root",
    "gists/new": "create",
    "gists/:id/edit": "edit"
  },

  root: function(){
    var that = this;
    var view = new GA.Views.GistsIndex({collection: that.gists});
    that.$rootEl.html(view.render().el)
  },

  create: function(){
    var that = this;
    var view = new GA.Views.GistForm({collection: that.gists});
    that.$rootEl.html(view.render().el)
  },

  edit: function(id){
    var that = this;
    var view = new GA.Views.GistEditForm({
      collection: that.gists,
      id: id
    });

    that.$rootEl.html(view.render().el)
  },

})