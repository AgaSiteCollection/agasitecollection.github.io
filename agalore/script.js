function lotusLoading() {
  setTimeout(function() {
    document.getElementById("vtmLotus").remove();
    document.getElementById("loading").style.height = "0";
  }, 5000);
}