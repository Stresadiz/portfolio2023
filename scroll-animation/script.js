const cards = document.querySelectorAll(".card");

for (let i = 1; i < cards.length; i++) {
    if (i%2 == 0) {
        cards[i].classList.add("card--left");
    } else {
        cards[i].classList.add("card--right");
    }

}


window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // Posición vertical del scroll
    const scrollPositionInEms = scrollPosition / 16; // Conversión de píxeles a ems
    const cardIndexToRemoveClass = Math.floor(scrollPositionInEms / 10); // Índice de la "card" a la que se le debe remover la clase
  
    if (cardIndexToRemoveClass < cards.length) {
      // Si el índice es menor que la cantidad de "cards", se remueve la clase correspondiente de la "card"
      if (cardIndexToRemoveClass % 2 == 0) {
        cards[cardIndexToRemoveClass].classList.remove("card--left");
        cards[cardIndexToRemoveClass].style.transition = "1s";
      } else {
        cards[cardIndexToRemoveClass].classList.remove("card--right");
        cards[cardIndexToRemoveClass].style.transition = "1s";
    }
    }
  });