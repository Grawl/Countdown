function split() {
	$("figure>div").lettering();
}
function pluralize(n, text_forms) {
    n      = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
        return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    }
    if (n1 == 1) {
        return text_forms[0];
    }
    return text_forms[2];
}
month = --month;
dateFuture = new Date(year, month, day, hour, min, sec);
function GetCount() {
	dateNow = new Date();
	amount = dateFuture.getTime() - dateNow.getTime() + 5;
	delete dateNow;
	if (amount < 0) {
		out = "<figure><div><span>" + final + "</span></div></figure>";
		document.getElementById('countbox').innerHTML = out;
	} else {
		days = 0;
		hours = 0;
		mins = 0;
		secs = 0;
		out = "";
		amount = Math.floor(amount / 1000);
		days = Math.floor(amount / 86400);
		amount = amount % 86400;
		hours = Math.floor(amount / 3600);
		amount = amount % 3600;
		mins = Math.floor(amount / 60);
		amount = amount % 60;
		secs = Math.floor(amount);
		// немного быдлокода — добавляю нолики
		zero = "0";
		if (days < 10) {
			days = zero + days;
			}
		if (hours < 10) {
			hours = zero + hours;
			}
		if (mins < 10) {
			mins = zero + mins;
			}
		if (secs < 10) {
			secs = zero + secs;
			}
		//
		out = 
			"<figure>" +
				"<div>" + days + "</div>" +
				"<figcaption>" + pluralize(days, ['день', 'дня', 'дней']) + "</figcaption>" +
			"</figure>" +
			"<figure>" +
				"<div>" + hours + "</div>" +
				"<figcaption>" + pluralize(hours, ['час', 'часа', 'часов']) + "</figcaption>" +
			"</figure>" +
			"<figure>" +
				"<div>" + mins + "</div>" +
				"<figcaption>" + pluralize(mins, ['минута', 'минуты', 'минут']) + "</figcaption>" +
			"</figure>" +
			"<figure>" +
				"<div>" + secs + "</div>" +
				"<figcaption>" + pluralize(secs, ['секунда', 'секунды', 'секунд']) + "</figcaption>" +
			"</figure>";
		document.getElementById('countbox').innerHTML = out;
		setTimeout("GetCount()", 1000);
		split();
	}
}
window.onload = function () {
	GetCount();
}