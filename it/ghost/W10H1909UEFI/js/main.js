function theme() {
  var i = document.getElementById('theme').innerHTML;
  if (i == "<i>Light mode</i>") {
    document.getElementById('theme').innerHTML = "<i>Dark mode</i>";
    document.getElementById('menu1').innerHTML = "<i>Dark mode</i>"
    document.getElementById('link1').href = "./css/light.css";
  } else {
    document.getElementById('theme').innerHTML = "<i>Light mode</i>"
    document.getElementById('menu1').innerHTML = "<i>Light mode</i>"
    document.getElementById('link1').href = "./css/dark.css";
  }
}

function color() {
  var u = document.getElementById('color').innerHTML;
  if (u == "<i>Colored mode</i>") {
    document.getElementById('color').innerHTML = "<i>WB mode</i>";
    document.getElementById('menu2').innerHTML = "<i>WB mode</i>";
    document.getElementById('link2').href = "./css/color.css";
  } else {
    document.getElementById('color').innerHTML = "<i>Colored mode</i>"
    document.getElementById('menu2').innerHTML = "<i>Colored mode</i>";
    document.getElementById('link2').href = "./css/wb.css";
  }
}

document.addEventListener('contextmenu', function(e) {
  var ctxMenu = document.getElementById("ctxMenu");
  ctxMenu.style.display = "block";
  ctxMenu.style.left = (event.pageX-125)+"px";
  ctxMenu.style.top = (event.pageY-85)+"px";
  e.preventDefault();
}, false);
document.addEventListener('click', function(e) {
  e.preventDefault();
  var ctxMenu = document.getElementById("ctxMenu");
  ctxMenu.style.display = "none";
}, false);
document.addEventListener('scroll', function(e) {
  e.preventDefault();
  var ctxMenu = document.getElementById("ctxMenu");
  ctxMenu.style.display = "none";
}, false);

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";

  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.top = "100px";
  } else {
    document.getElementById("top").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
