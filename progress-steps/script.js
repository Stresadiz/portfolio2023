let icons = document.querySelectorAll(".icon");
let progressBar = document.querySelector(".progress--active");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let currentWidth = 0;
let i = 0;

next.addEventListener("click", () => {
    if (currentWidth < 90) {
        currentWidth += 30;
        progressBar.style.width = currentWidth + "%";
        progressBar.style.transition = "1s";
        i++;

        for (let j = 1; j <= i; j++) {
            icons[j].classList.add("icon--active");
            icons[j].style.transitionDelay = "0.5s";
        }
    }
});

prev.addEventListener("click", () => {
    if (currentWidth > 0) {
        currentWidth -= 30;
        progressBar.style.width = currentWidth + "%";

        i--;

        for (let j = i+1; j > 0; j++) {
            icons[j].classList.remove("icon--active");
            icons[j].style.transitionDelay = "0s";
        }
    }
});
