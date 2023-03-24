// Definir la URL de la API
const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

// Seleccionar el elemento del párrafo en el DOM
let chisteElement = document.querySelector(".card__text")
const btn = document.querySelector(".btn");

//Cada que se hace click al boton se le hace un request a la Api
btn.addEventListener("click", ()=> {
    // Hacer una solicitud a la API utilizando fetch()
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Modificar el contenido del elemento del párrafo con el chiste obtenido de la API
      
      chisteElement.textContent = `${data.setup} ${data.delivery}`;
    })
    .catch(error => {
      // Si algo sale mal, maneja el error aquí
      console.error(error);
    });
})

