function validateForm() {
    let Username = document.forms[0]["Username"].value;
    let password = document.forms[0]["password"].value;
    let birthDate = document.forms[0]["birthDate"].value;
    let firstName = document.forms[0]["first_name"].value;
    let lastName = document.forms[0]["last_name"].value;
if (!Username.includes("@")) {
    alert("Please enter valid emal, that includes @ at the begining")
    return false;
}

if (!password.match(/^[a-zA-Z]+$/)) {
    alert("Password can only contain letters from a-z, A-Z, and numbers");
    return false;
}

if (!firstName.match(/^[a-zA-Z]+$/)) {
    alert("First name can only contain letters from a-z.");
    return false;
}


if (!lastName.match(/^[a-zA-Z]+$/)) {
    alert("Last name can only contain letters from a-z.");
    return false;
}

let today = new Date();

let inputDate = new Date(birthDate);
if (inputDate > today) {
    alert("Please enter a valid birth date.");
    return false;
}

alert("You registered Successfully!")
}

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