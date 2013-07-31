window.GA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, gistsData) {

    var gists = new GA.Collections.Gists(JSON.parse(gistsData))
    new GA.Routers.Gists($rootEl, gists);

    Backbone.history.start();
  }
};
