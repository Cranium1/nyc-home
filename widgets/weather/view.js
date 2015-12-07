WeatherView = Backbone.View.extend({
  initialize : function() {
    this.render();
    this.model.on('sync', this.render, this);
  },
  render : function() {
    // this.$el.html(this.model.get("temp")+"&deg; "+this.model.get("condition"));
    
    var template = _.template($('#weatherTemplate').html())({temp: this.model.get("temp"), condition: this.model.get("condition")})
    
    this.$el.html(template);
    
    return this;
  }
});