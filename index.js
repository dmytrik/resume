const burger = document.querySelector(".resume__burger");
const mobileMenu = document.querySelector(".mobile-backdrop");
const mobileContent = document.querySelector(".resume__aside");
const closeBtn = document.querySelector(".close-mobile");

const toggleInformation = () => {
  mobileMenu.classList.toggle("is-open");
};
burger.addEventListener("click", toggleInformation);
closeBtn.addEventListener("click", toggleInformation);
