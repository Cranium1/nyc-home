TimeModel = Backbone.Model.extend({
    initialize: function() {
        var model = this;

        setInterval(function(){
            model.setTime();
        },1000);
    },

    setTime: function() {
        var today = new Date().toString().split(" ");
        var time = today[4].substring(0, 5);
        var day_of_week = today[0];
        var month = today[1];
        var date = today[2];
        this.set("time", time);
        this.set("day_of_week", day_of_week);
        this.set("month", month);
        this.set("date", date);
    }
});