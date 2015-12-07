TimeView = Backbone.View.extend({
	tagName: "h1",
	className: "timewidge",
  initialize : function() {
    this.render();
    this.model.on('change', this.render, this);
  },
  render : function() {
    this.$el.html(this.model.get("time"));

    return this;
  }
});