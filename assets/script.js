const slider = document.getElementById("slider");
const captionEl = document.querySelector(".caption");

const backgrounds = [
  {
    image: "./assets/img/Nen1.png",
    caption: "LFC - You'll Never Walk Alone",
  },
  {
    image: "./assets/img/nen2.png",
    caption: "Anfield - The Fortress",
  },
  {
    image: "./assets/img/nen3.png",
    caption: "Liverpool - Red Spirit",
  },
  {
    image: "./assets/img/nen4.png",
    caption: "By Daji @ iNtErNeT",
  },
];

let currentIndex = 0;

function changeBackground() {
  const bg = backgrounds[currentIndex];
  slider.style.background = `url('${bg.image}') center center / cover no-repeat`;
  captionEl.innerText = bg.caption;

  currentIndex = (currentIndex + 1) % backgrounds.length;
}

changeBackground();
setInterval(changeBackground, 4000);
// Responsive
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
}
