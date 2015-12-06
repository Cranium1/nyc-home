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
		  url:			"https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.placefinder where text='New York, NY' and gflags='R')&format=json",
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