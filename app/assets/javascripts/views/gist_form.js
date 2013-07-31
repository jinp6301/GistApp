GA.Views.GistForm = Backbone.View.extend({

  events: {
    "submit": "create"
  },

  render: function(){
    var template = JST['gists/form'];
    this.$el.html(template)
    return this
  },

  create: function(event){
    var that = this;
    event.preventDefault();
    this.collection.create({
      title: $("input[type=text]").val(),
    }, {
      success: function(){
        Backbone.history.navigate("", {trigger: true} )
      }
    });
  }

});