var Article = Backbone.Model.extend();

var NewsModel = Backbone.Collection.extend({

	initialize: function() {
		var collection = this;

		collection.fetch();
		setInterval(function(){
			collection.fetch();
		},60000);
	},

	model : Article,
	url : "http://api.nytimes.com/svc/topstories/v1/home.jsonp?api-key=810f34cc075b2edfd8826c689f4bc327:6:73683735",
	sync : function(method, collection, options) {
		options.dataType = "jsonp";
		options.jsonpCallback = "callbackTopStories";
		return Backbone.sync(method, collection, options);
	},
	parse : function(response) {
		return response.results;
	}
});