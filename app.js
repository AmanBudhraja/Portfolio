//Experience section animation
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

//Navigation bar scroll animation
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-1000px";
  }
  prevScrollpos = currentScrollPos;
};

//Smooth scroll animation
function smoothscroll(target, duration) {
  var target = document.querySelector(target);
  var targetpos = target.getBoundingClientRect().top;
  var startpos = window.pageYOffset;
  var dist = targetpos - startpos;
  var starttime = null;

  function anime(currentTime) {
    if (starttime === null) starttime = currentTime;
    var timeelapsed = currentTime - starttime;
    var run = ease(timeelapsed, startpos, dist, duration);
    window.scrollTo(0, run);
    if (timeelapsed < duration) requestAnimationFrame(anime);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(anime);
}

var section1 = document.querySelector(".ed");
var section2 = document.querySelector(".ex");
var section3 = document.querySelector(".pro");
var section4 = document.querySelector(".con");

section1.addEventListener("click", function () {
  smoothscroll("#education", 1000);
});
section2.addEventListener("click", function () {
  smoothscroll("#experience", 1000);
});
section3.addEventListener("click", function () {
  smoothscroll("#project", 1000);
});
section4.addEventListener("click", function () {
  smoothscroll("#contact", 1000);
});

//Typewriting animation
const texts = ["Aman Budhraja"];
let count = 0;
let index = 0;
let currenttext = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currenttext = texts[count];
  letter = currenttext.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currenttext.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
})();

//Preloading animation
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preload");
  preloader.classList.add("finish");
});
