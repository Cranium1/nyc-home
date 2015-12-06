WeatherView = Backbone.View.extend({
  events : {
    "submit form": "addToCart"
  },
  initialize : function() {
    this.render();
    this.model.on('sync', this.render, this);
  },
  render : function() {
    this.$el.html(this.model.get("temp")+"&deg;");

    return this;
  }
});