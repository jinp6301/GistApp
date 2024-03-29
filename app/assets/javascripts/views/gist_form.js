GA.Views.GistForm = Backbone.View.extend({

  events: {
    "submit": "create"
  },

  render: function(){
    var form = JST['gists/form'];
    var file_form = JST['gist_files/form']
    this.$el.html(form)

    this.$el.find("input[type=submit]").before(file_form)

    return this
  },

  create: function(event){
    var that = this;
    event.preventDefault();
    this.collection.create({
      title: $("input[name=gist\\[title\\]]").val(),
      gist_files_attributes: [{
        name: $("input[name=gist\\[gist_files_attributes\\]\\[0\\]\\[name\\]]").val(),
        body: $("input[name=gist\\[gist_files_attributes\\]\\[0\\]\\[body\\]]").val()
      }]}, {
      success: function(){
        Backbone.history.navigate("", {trigger: true} )
      }
    });
  }

});