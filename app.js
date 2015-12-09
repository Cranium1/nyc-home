app = {};

$(window).load(function() {
	$(this).scrollTop(0);
  	$("html, body").animate({ scrollTop: $(document).height() - window.innerHeight }, 5000);
});

$(function(){
	$.stellar({
		positionProperty: 'position',
		hideDistantElements: false,
		verticalOffset: -100
	});

	weather = new WeatherModel;
	weatherView = new WeatherView({model: weather});

	news = new NewsModel;
	newsView = new NewsView({collection: news});

	time = new TimeModel;
	timeView = new TimeView({model: time});

	$('#weatherWidget').append(weatherView.el);
	$('.searchrow').append(newsView.el);
	$('#timeWidget').append(timeView.el);
});