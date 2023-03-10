const links = document.querySelectorAll(".nav__link");
const details = document.querySelectorAll(".detail--link");

links.forEach((link, index) => {
  link.addEventListener("mouseover", () => {
    details[index].style.width = "100%";
    details[index].style.transition = "0.5s";
  });
  link.addEventListener("mouseout", () => {
    details[index].style.width = "";
    details[index].style.transition = "0.5s";
  });
});

const span =  document.querySelector(".span--change");
const emoji = document.querySelector(".emoji");

span.addEventListener("mouseover", () => {
    span.style.cursor = "pointer";
    emoji.style.width = "10em";
    emoji.style.transition = "0.5s";
});

span.addEventListener("mouseout", () => {
    span.style.cursor = "pointer";
    emoji.style.width = "0em";
    emoji.style.transition = "0.5s";
});