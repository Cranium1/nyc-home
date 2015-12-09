WeatherView = Backbone.View.extend({
  className: "widget",
  initialize : function() {
    this.model.on('sync', this.render, this);
  },
  render : function() {
    var template = _.template($('#weatherTemplate').html())({temp: this.model.get("temp"), condition: this.model.get("condition")})
    
    this.$el.html(template);
    
    return this;
  }
});