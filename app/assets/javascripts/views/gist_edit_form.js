GA.Views.GistEditForm = Backbone.View.extend({

  events: {
    "submit": "update"
  },

  render: function(){
    var model = this.collection.get(this.id)
    var form = JST['gists/form']({model: model});
    var file_form = JST['gist_files/form']({model: model})
    this.$el.html(form)

    this.$el.find("input[type=submit]").before(file_form);

    return this;
  },

  update: function(event){
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