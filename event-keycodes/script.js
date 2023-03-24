let cardstitles = document.querySelectorAll(".keycode__card");

document.addEventListener("keydown", (e)=> {
    cardstitles[0].innerText = e.keyCode;
    cardstitles[1].innerText = e.key;
    cardstitles[2].innerText = e.code;
})