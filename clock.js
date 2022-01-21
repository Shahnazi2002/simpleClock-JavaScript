function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var midday = "AM";

  if (h == 0) {
    h = 12;
  } else if (h == 12) {
    midday = "PM";
  } else if (h > 12) {
    h -= 12;
    midday = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + midday;

  document.getElementById("display").innerText = time;

  setTimeout(showTime, 1000);
}

showTime();
