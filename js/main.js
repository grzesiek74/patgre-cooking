const navLinks = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".navbar-collapse");
const dropdownItems = document.querySelectorAll(".dropdown-item");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navList.classList.remove("show");
  })
);
dropdownItems.forEach((item) =>
  item.addEventListener("click", () => {
    navList.classList.remove("show");
  })
);

// slider
const image = document.querySelector(".slide-img");
const h1 = document.querySelector(".txt h1");
const h2 = document.querySelector(".txt h2");
const dots = [...document.querySelectorAll(".dots span")];
const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const startBtn = document.querySelector(".startBtn");

const time = 4000;
let active = 0;

const slideList = [
  {
    img: "img/header/header1-big.jpg",
    text1: "PATGRE Cooking",
    text2: "Gotuj z nami!",
    startBtn: startBtn,
  },
  {
    img: "img/header/header2-big.jpg",
    text1: "Kuchnie Świata",
    text2: "Potrawy z różnych stron świata",
    startBtn: startBtn,
  },
  {
    img: "img/header/header3-big.jpg",
    text1: "Pyszne Desery",
    text2: "Dla każdego coś pysznego :)",
    startBtn: startBtn,
  },
];

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text1;
  h2.textContent = slideList[active].text2;
  startBtn;
  changeDot();
};

let indexInterval = setInterval(changeSlide, time);

const clickChangeSlide = (e) => {
  if (
    e.target.closest("div").className === "left" ||
    e.target.closest("div").className === "right"
  ) {
    clearInterval(indexInterval);

    e.target.closest("div").className === "left" ? active-- : active++;

    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text1;
    h2.textContent = slideList[active].text2;
    startBtn;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

prev.addEventListener("click", clickChangeSlide);
next.addEventListener("click", clickChangeSlide);

// navbar scroll background

const navbar = document.querySelector(".navbar");

const changeNavColor = () => {
  if (window.scrollY >= 100) {
    navbar.classList.add("nav-bg");
  } else {
    navbar.classList.remove("nav-bg");
  }
};

window.addEventListener("scroll", changeNavColor);

// menu tabs
const menuSections = document.querySelectorAll(".menu-section");
const menuTabs = document.querySelectorAll(".menu-tab");

const showTab = (id) => {
  menuSections.forEach((section) => (section.style.display = "none"));
  menuTabs.forEach((tab) => tab.classList.remove("menu-tab-active"));

  document.getElementById(id).style.display = "block";

  const currentActiveButton = document.querySelector(`[data-id=${id}]`);
  currentActiveButton.classList.add("menu-tab-active");
};
