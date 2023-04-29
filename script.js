function pageLoad() {
  setTimeout(function() {
    document.getElementById("spinner").remove();
    document.getElementById("wait").style.height = "0";
  }, 2500);
}