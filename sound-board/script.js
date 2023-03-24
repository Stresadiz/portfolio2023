let btns = document.querySelectorAll(".btn");
let audios = document.querySelectorAll(".sound");

let i = 0;

btns.forEach((btn, index) => {
    btn.addEventListener("click", ()=> {
        audios[index].play();
    })
});