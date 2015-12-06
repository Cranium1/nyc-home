function getLocation() {
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	getWeatherFromApi(position.coords.latitude, position.coords.longitude);
}

function getWeatherFromApi(latitude, longitude) {
	var script = document.createElement('script');
	script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.placefinder where text='"+latitude+","+longitude+"' and gflags=\"R\")&format=json&callback=callbackFunction";
	debugger;
	document.head.appendChild(script);
	document.head.removeChild(script);
}

function callbackFunction(data) {
	var item = data.query.results.channel.item;

	$('#weather').html(item.condition.temp+"&deg;")
};

$(document).ready(function(){
	getLocation();
	setInterval(getLocation, 600000);
});