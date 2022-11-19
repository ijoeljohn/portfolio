const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

window.onload = function() {
	// Month Day, Year Hour:Minute:Second, id-of-element-container
	countUpFromTime("June 20, 2022 12:00:00", 'countup1'); // ****** Change this line!
  };
  function countUpFromTime(countFrom, id) {
	countFrom = new Date(countFrom).getTime();
	var now = new Date(),
		countFrom = new Date(countFrom),
		timeDifference = (now - countFrom);
	  
	var secondsInADay = 60 * 60 * 1000 * 24,
		secondsInAHour = 60 * 60 * 1000;
	  
	days = Math.floor(timeDifference / (secondsInADay) * 1);
	years = Math.floor(days / 365);
	if (years > 1){ days = days - (years * 365) }
	hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
	mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
	secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
	var idEl = document.getElementById(id);

	
	idEl.getElementsByClassName('days')[0].innerHTML = days;
	idEl.getElementsByClassName('hours')[0].innerHTML = hours;
	idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
	
	
  
	clearTimeout(countUpFromTime.interval);
	countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }