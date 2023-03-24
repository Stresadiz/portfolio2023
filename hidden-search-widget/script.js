const btn = document.querySelector(".btn");
const input = document.querySelector(".search");

btn.addEventListener("click", () => {
    input.classList.toggle("search--disable");
    input.style.transition = "0.5s";
})