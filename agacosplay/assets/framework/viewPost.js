// function postCSS() {
//   var css = document.createElement("link");
//   css.rel = "stylesheet";
//   // css.href = "/agacosplay/assets/framework/viewPost.css";
//   css.href = "https://unpkg.com/sakura.css/css/sakura.css";
//   css.type = "text/css";
//   css.media = "all"
//   window.frames[0].document.head.appendChild(css);
// }

function readPost(mun) {
  // switch (mun) {
  //   case "Limay":
  //     document.getElementById("postViewer").src = "/agacosplay/posts/bataan2024/20240820_post.html";
  //     break;
  //   case "Orion":
  //     break;
  //   case "Balanga":
  //     break;
  //   case "Pilar":
  //     break;
  //   case "Mariveles":
  //     break;
  //   case "Abucay":
  //     break;
  //   case "Morong":
  //     break;
  //   case "Orani":
  //     break;
  //   case "Hermosa":
  //     break;
  //   case "Samal":
  //     break;
  //   case "Dinalupihan":
  //     break;
  //   case "Bagac":
  //     break;
  //   default:
  //     break;
  // }
  // document.getElementById("postViewer").onload = () => { postCSS(); };
  document.getElementById("postViewer").src = mun;
  document.getElementById("showPostDialog").style.display = "flex";
  setTimeout(() => { // prevent instantaneous execution
    document.getElementById("showPostDialog").style.opacity = "1";
  }, 0);
}

function viewMap(m) {
  document.getElementById("postViewer").src = m;
  document.getElementById("showPostDialog").style.display = "flex";
  setTimeout(() => { // prevent instantaneous execution
    document.getElementById("showPostDialog").style.opacity = "1";
  }, 0);
}