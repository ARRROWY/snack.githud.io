// Добавляем обработчик события для кнопки переключения навбара
var navbarToggler = document.querySelector(".navbar-toggler");
var navbarNav = document.querySelector("#navbarNav");

navbarToggler.addEventListener("click", function () {
  navbarNav.classList.toggle("collapsed");
});

// Добавляем обработчик события при прокрутке страницы
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      return unescape(y);
    }
  }
}

var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');

function toggleMute() {
  if (song.muted) {
    song.muted = false;
    document.getElementById('muteButton').innerText = 'Mute';
  } else {
    song.muted = true;
    document.getElementById('muteButton').innerText = 'Unmute';
  }
}

function update() {
  if (!played) {
    if (tillPlayed) {
      song.currentTime = tillPlayed;
      song.play();
      played = true;
    } else {
      song.play();
      played = true;
    }
  } else {
    setCookie('timePlayed', song.currentTime);
  }
}

document.addEventListener('keypress', function(event) {
  if (event.key === 'f' || event.key === 'F') {
    toggleMute();
  }
});

setInterval(update, 1000);