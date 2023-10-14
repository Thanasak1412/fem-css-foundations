const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

const handleClickMenu = () => {
  hamburgerMenu.classList.toggle("hamburger-menu--hide");
  closeBtn.classList.toggle("close--show");
  nav.classList.toggle("nav--visible");
  body.classList.toggle("disabled--scroll");
};

// Events handler
hamburgerMenu.addEventListener("click", handleClickMenu);
closeBtn.addEventListener("click", handleClickMenu);
