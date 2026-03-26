// ----- Preloader -----
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preload").classList.add("finish");
  }, 500);
});

// ----- Navbar Scroll Hide/Show -----
let prevScroll = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  navbar.style.top = prevScroll > currentScroll ? "0": "-80px";
  prevScroll = currentScroll;
});

// ----- Smooth Scroll -----
document.querySelectorAll(".ed, .ex, .pro, .con").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ----- Experience Tabs -----
const tabs = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(tc => tc.classList.remove("show"));

    tab.classList.add("active");
    const city = tab.getAttribute("data-tab");
    document.getElementById(city).classList.add("show");
  });
});

// Activate default tab
document.querySelector(".tablinks").click();

// ----- Typewriting -----
const texts = ["Aman Budhraja"];
let i = 0, j = 0;

function typeWriter() {
  const el = document.querySelector(".typing");
  if (!el) return;

  const text = texts[i];
  el.textContent = text.slice(0, ++j);

  if (j === text.length) {
    setTimeout(() => {
      j = 0;
      i = (i + 1) % texts.length;
      typeWriter();
    }, 1500);
  } else {
    setTimeout(typeWriter, 200);
  }
}

typeWriter();
