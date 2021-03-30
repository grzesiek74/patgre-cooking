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

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
