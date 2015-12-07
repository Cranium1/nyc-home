app = {};

var abc;
var weatherView;

// $(document).ready(function(){
//     window.scrollTo(0, 0);
// });
// on reload, to top of page, window load, not doc ready
// window.onload=function(){
//     setTimeout(function(){
//         scrollTo(0,-1);
//     },0);
// }
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

	time = new TimeModel;
	timeView = new TimeView({model: time});

	$('#weatherWidget').append(weatherView.el);
	$('#timeWidget').append(timeView.el);
});