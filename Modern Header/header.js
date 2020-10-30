let prevScroll = window.pageYOffset;
window.onscroll = () => {
  let curScroll = window.pageYOffset;
  const headerElement = document.getElementsByClassName("header")[0];
  if (prevScroll > curScroll) {
    headerElement.style.top = "0";
  } else {
    headerElement.style.top = "-25vh";
  }
  prevScroll = curScroll;
};
const mobileMenu = document.getElementsByClassName("link-col-mobile")[0];
const mobileOverlay = document.getElementsByClassName("mobile-overlay")[0];
const closeButton = document.getElementsByClassName("close-button")[0];
mobileMenu.addEventListener("click", () => {
  mobileOverlay.style.height = "100%";
  mobileOverlay.style.opacity = "1";
});
closeButton.addEventListener("click", () => {
  mobileOverlay.style.height = "0";
  mobileOverlay.style.opacity = "0";
});
