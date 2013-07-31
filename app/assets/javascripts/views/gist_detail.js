GA.Views.GistDetail = Backbone.View.extend({
  tagName: "li",

  render: function(){
    var that = this;

    var template = JST["gists/detail"]({model: this.model});

    this.$el.html(template);
    return this;
  }
})