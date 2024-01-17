const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");
const topLine = document.querySelector(".top");
const middleLine = document.querySelector(".middle");
const bottomLine = document.querySelector(".bottom");

hamburger.addEventListener("click", () => {
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.add("flex", "slideIn");
    mobileNav.classList.remove("hidden");
    changeHamburgerToCross();
    return;
  }
  mobileNav.classList.add("hidden");
  mobileNav.classList.remove("flex", "slideIn");
  changeCrossToHamburger();
});

function changeHamburgerToCross() {
  hamburger.classList.add("fixed", "right-[5%]");
  middleLine.classList.add("hidden");
  topLine.setAttribute("y", "45");
  bottomLine.setAttribute("y", "45");
  topLine.classList.add("rotate-45");
  bottomLine.classList.add("-rotate-45");
}

function changeCrossToHamburger() {
  hamburger.classList.remove("fixed", "right-[5%]");
  middleLine.classList.remove("hidden");
  topLine.setAttribute("y", "25");
  bottomLine.setAttribute("y", "65");
  topLine.classList.remove("rotate-45");
  bottomLine.classList.remove("-rotate-45");
}
