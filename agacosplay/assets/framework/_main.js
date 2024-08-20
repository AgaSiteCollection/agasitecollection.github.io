// root init
function init() {
  pageInit(); // per-page
  startSplash();
}

function startSplash() {
  setTimeout(() => {
    document.getElementById("splashLogo").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("splashLogo").style.display = "none";
      document.getElementById("splashBlock").style.height = "0";
    }, 1250);
  }, 1250);
}

function closeViewer() {
  document.getElementById("showPostDialog").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("showPostDialog").style.display = "none";
  }, 750);
}