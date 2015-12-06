app = {};

var abc;
var weatherView;

$(function(){
	$.stellar({
		positionProperty: 'position',
		hideDistantElements: false,
		verticalOffset: -100
	});

	weather = new WeatherModel;
	weatherView = new WeatherView({model: weather});

	time = new TimeModel;
	timeView = new TimeView({model: time});

	$('#datacontainer').append(weatherView.el);
	$('#datacontainer').append(timeView.el);
});