function load() {
  setTimeout(function() {
    document.getElementById("logo").remove();
    document.getElementById("bg").style.height = "0";
  }, 1000);
}

function clearNotice() {
  document.getElementById("noticeDisappear").remove();
  document.getElementById("notice").style.padding = "0";
  document.getElementById("notice").style.height = "0";
}