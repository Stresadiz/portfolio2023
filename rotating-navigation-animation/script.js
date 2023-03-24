const lines = document.querySelectorAll(".line");
const btn = document.querySelector(".menu");
const container = document.querySelector(".container");

btn.addEventListener("click", ()=> {
    lines.forEach(line => {
        line.classList.toggle("line--active");
        line.style.transition = "0.5s";
    });

    container.classList.toggle("container--active");
    container.style.transition = "1s";
})
