WeatherView = Backbone.View.extend({
  initialize : function() {
    this.render();
    this.model.on('sync', this.render, this);
  },
  render : function() {
    this.$el.html(this.model.get("temp")+"&deg; "+this.model.get("condition"));

    return this;
  }
});