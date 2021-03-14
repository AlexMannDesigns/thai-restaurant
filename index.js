//Items from DOM
const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer");
const accordions = document.querySelectorAll(".contentBx");
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const panels = document.querySelectorAll(".panel");

//navbar style change
window.addEventListener("scroll", () => {
  (window.scrollY > nav.offsetHeight + 150) ? nav.classList.add("active") : nav.classList.remove("active");
});

//responsive hamburger menu
hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

//accordion menu
accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});

//gallery section
panels.forEach(panel => {
  panel.addEventListener("click", () => {
    panel.classList.toggle("active")
  })
})

//render footer
const year = new Date().getFullYear();

let copyright = document.createElement("span");
copyright.classList.add("footer-text")
copyright.innerHTML = `&#169; Alex Mann ${year}`;
footer.appendChild(copyright);
