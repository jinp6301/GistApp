GA.Routers.Gists = Backbone.Router.extend({

  initialize: function($rootEl, gists){
    this.$rootEl = $rootEl;
    this.gists = gists;
  },

  routes: {
    "": "root"
  },

  root: function($rootEl, gists){
    var that = this;
    var view = new GA.Views.GistsIndex({collection: that.gists});
    that.$rootEl.html(view.render().el)
  }
})