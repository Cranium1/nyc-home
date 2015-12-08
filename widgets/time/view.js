TimeView = Backbone.View.extend({
	className: "widget",
  initialize : function() {
    this.render();
    this.model.on('change', this.render, this);
  },
  render : function() {
    var template = _.template($('#timeTemplate').html())({time: this.model.get("time"), date: this.model.get("date"), day_of_week: this.model.get("day_of_week"), month: this.model.get("month")});

    this.$el.html(template);

    return this;
  }
});