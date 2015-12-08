WeatherModel = Backbone.Model.extend({
	initialize: function() {
		var model = this;

		model.fetch();
		setInterval(function(){
			model.fetch();
		},60000);
	},

	sync: function(method, model, options) {
		var params = _.extend({
		  type:         'GET',
		  dataType:     'jsonp',
		  url:			"http://api.nytimes.com/svc/topstories/v1/home.jsonp?api-key=810f34cc075b2edfd8826c689f4bc327:6:73683735",
		  processData:  false
		}, options);

		return $.ajax(params);
	},
	
	parse: function(response) {
		if (response) {
			return {temp: response.query.results.channel.item.condition.temp,
					condition: response.query.results.channel.item.condition.text};
		}
	}
});