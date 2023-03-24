const loader = document.querySelector(".loader h1");
const container = document.querySelector(".container");

window.addEventListener("load", ()=> {
    let porcent = 0;
    let interval = setInterval(()=> {
        porcent += 1;
        loader.innerText = porcent + "%";
        container.style.filter = "blur(0)"; // elimina el filtro de desenfoque
        container.style.transition = "4s";

        if (porcent >= 100) {
            clearInterval(interval);
        }
    }, 30);
});