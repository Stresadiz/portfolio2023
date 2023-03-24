let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("card--big");
        card.style.transition = "1s";

        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove("card--big");
                otherCard.style.transition = "1s";
            }
        });
    })
});