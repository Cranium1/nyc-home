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

	$('#datacontainer').html(weatherView.el);
});