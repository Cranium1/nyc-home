NewsView = Backbone.View.extend({
  className: "widget",
  initialize : function() {
    this.collection.on('sync', this.render, this);
  },
  render : function() {
    var template = _.template($('#newsTemplate').html())({
      collection: this.collection.toJSON()
    });
    
    this.$el.html(template);
    
    return this;
  }
});