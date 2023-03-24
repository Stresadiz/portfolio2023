const cards = document.querySelectorAll(".faq__title");
const response = document.querySelectorAll(".faq__response");

cards.forEach((card, index) => {
    card.addEventListener("click", ()=> {
        response[index].classList.toggle("active");
    })
});