function startTime() {
    var today = new Date().toString().split(" ");
    var time = today[4].substring(0, 5);
    var weekday = today[0];
    var month = today[1];
    var day = today[2];
    document.getElementsByClassName('time_of_day')[0].innerHTML = time;
    document.getElementsByClassName('weekday')[0].innerHTML = weekday;
    document.getElementsByClassName('month')[0].innerHTML = month;
    document.getElementsByClassName('day')[0].innerHTML = day;
}

$(function() {
	startTime();
	setInterval(startTime, 1000);
});