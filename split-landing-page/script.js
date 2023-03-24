let left = document.querySelector(".left-side");
let right = document.querySelector(".right-side");

left.addEventListener("click", ()=> {
    left.classList.remove("little");
    left.classList.add("fully");
    left.style.transition = "1s";
    right.classList.add("little");
    right.style.transition = "1s";
})

right.addEventListener("click", ()=> {
    right.classList.remove("little");
    right.classList.add("fully");
    right.style.transition = "1s";
    left.classList.add("little");
    left.style.transition = "1s";
})