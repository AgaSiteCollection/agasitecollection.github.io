function load() {
  setTimeout(function() {
    document.getElementById("logo").remove();
    document.getElementById("bg").style.height = "0";
  }, 1000);
  timer();
  docMod();
}

function timer() {
  const time = new Date('October 17, 2023 21:30:00 GMT+08:00').getTime();
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = time - now;
    var d = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
    var h = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    var m = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    var s = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
    document.getElementById("time").innerHTML = d + ":" + h + ":" + m + ":" + s;
    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("time").innerHTML = "00:00:00:00";
    }
  }, 1000);
}