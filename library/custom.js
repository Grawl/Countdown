month = --month;
dateFuture = new Date(year, month, day, hour, min, sec);
function GetCount() {
	dateNow = new Date();
	amount = dateFuture.getTime() - dateNow.getTime() + 5;
	delete dateNow;
	if (amount < 0) {
		out = "<h2>С Новым Годом!</h2>";
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
		// быдлокод такой быдлокод :3 не осилил, простите
		// дни
		daysCaption = "дней";
		daysCaptionFour = "дня";
			if (
				days == 54 ||
				days == 53 ||
				days == 52 ||
				days == 44 ||
				days == 43 ||
				days == 42 ||
				days == 34 ||
				days == 33 ||
				days == 32 ||
				days == 4 ||
				days == 3 ||
				days == 2
				) {
				daysCaption = daysCaptionFour;
			}
		daysCaptionOne = "день";
			if (
				days == 51 ||
				days == 41 ||
				days == 31 ||
				days == 21 ||
				days == 1
				) {
				daysCaption = daysCaptionOne;
			}
		// часы
		hoursCaption = "часов";
		hoursCaptionFour = "часа";
			if (
				hours == 54 ||
				hours == 53 ||
				hours == 52 ||
				hours == 44 ||
				hours == 43 ||
				hours == 42 ||
				hours == 34 ||
				hours == 33 ||
				hours == 32 ||
				hours == 4 ||
				hours == 3 ||
				hours == 2
				) {
				hoursCaption = hoursCaptionFour;
			}
		hoursCaptionOne = "час";
			if (
				hours == 51 ||
				hours == 41 ||
				hours == 31 ||
				hours == 21 ||
				hours == 1
				) {
				hoursCaption = hoursCaptionOne;
			}
		// минуты
		minsCaption = "минут";
		minsCaptionFour = "минуты";
			if (
				mins == 54 ||
				mins == 53 ||
				mins == 52 ||
				mins == 44 ||
				mins == 43 ||
				mins == 42 ||
				mins == 34 ||
				mins == 33 ||
				mins == 32 ||
				mins == 4 ||
				mins == 3 ||
				mins == 2
				) {
				minsCaption = minsCaptionFour;
			}
		minsCaptionOne = "минута";
			if (
				mins == 51 ||
				mins == 41 ||
				mins == 31 ||
				mins == 21 ||
				mins == 1
				) {
				minsCaption = minsCaptionOne;
			}
		// секунды
		secsCaption = "секунд";
		secsCaptionFour = "секунды";
			if (
				secs == 54 ||
				secs == 53 ||
				secs == 52 ||
				secs == 44 ||
				secs == 43 ||
				secs == 42 ||
				secs == 34 ||
				secs == 33 ||
				secs == 32 ||
				secs == 4 ||
				secs == 3 ||
				secs == 2
				) {
				secsCaption = secsCaptionFour;
			}
		secsCaptionOne = "секунда";
			if (
				secs == 51 ||
				secs == 41 ||
				secs == 31 ||
				secs == 21 ||
				secs == 1
				) {
				secsCaption = secsCaptionOne;
			}
		//
		// а теперь ещё немного быдлокода — добавляю нолики
		zero = "0";
		if (days < 10) {
			daysZero = zero;
			} else {
				daysZero = '';
			}
		if (hours < 10) {
			hoursZero = zero;
			} else {
				hoursZero = '';
			}
		if (mins < 10) {
			minsZero = zero;
			} else {
				minsZero = '';
			}
		if (secs < 10) {
			secsZero = zero;
			} else {
				secsZero = '';
			}
		//
		out = 
			"<figure>"
				+
				"<div>"
					+
					daysZero + days
					+
				"</div>"
				+
				"<figcaption>" + daysCaption + "</figcaption>"
				+
			"</figure>"
			+
			"<figure>"
				+
				"<div>"
					+
					hoursZero + hours
					+
				"</div>"
				+
				"<figcaption>" + hoursCaption + "</figcaption>"
				+
			"</figure>"
			+
			"<figure>"
				+
				"<div>"
					+
					minsZero + mins
					+
				"</div>"
				+
				"<figcaption>" + minsCaption + "</figcaption>"
				+
			"</figure>"
			+
			"<figure>"
				+
				"<div>"
					+
					secsZero + secs
					+
				"</div>"
				+
				"<figcaption>" + secsCaption + "</figcaption>"
				+
			"</figure>";
		document.getElementById('countbox').innerHTML = out;
			function split() {
				$("figure>div").lettering();
			}
			if (mins > 9) {
				split();
			}
			setInterval(split,100);
		setTimeout("GetCount()", 1000);
	}
}
window.onload = function () {
	GetCount();
}