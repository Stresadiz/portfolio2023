let textArea = document.querySelector("#textbox");
let divOptions = document.querySelector(".options");
let valueTextArea = textArea.value;
let optionsArray  = [];
let activeIndex = 0;
let timerId = null;

if (valueTextArea === "") {
    divOptions.innerHTML = "";
}

textArea.addEventListener("keydown", (event)=> {
    
    //Verificamos que s ehaya cliqueado la coma, en ese caso al terminar de escribir y agregar na coma
    // se agrega una nueva opcion

    if (event.keyCode === 188) {

        //Reseteamos el textArea.value para que no se muestre dos veces la misma opcion
        valueTextArea = textArea.value;
        
        optionsArray = valueTextArea.split(",");

        //Reseteamos las opciones a 0
        divOptions.innerHTML = "";
        
        //Añadimos las opciones actuales
        optionsArray.forEach(option => {
            divOptions.innerHTML += `<div class="option">${option}</div>`;
        });

        //En caso de tocar enter, se actualiza de nuevo el listado de opciones
    } else if (event.keyCode === 13) {
        valueTextArea = textArea.value;
        
        optionsArray = valueTextArea.split(",");

        divOptions.innerHTML = "";
        
        optionsArray.forEach((option) => {
            divOptions.innerHTML += `<div class="option">${option}</div>`;
          });
      
          // Agregar la clase inicial a la primera opción
          divOptions.children[activeIndex].classList.add("option--active");
      
          // Definir la función que cambia la clase activa
          const changeActiveClass = () => {
            // Remover la clase de la opción actual
            divOptions.children[activeIndex].classList.remove("option--active");
            // Incrementar el índice de la opción activa
            activeIndex++;
            // Si se llega al final de las opciones, volver al inicio
            if (activeIndex >= divOptions.children.length) {
              activeIndex = 0;
            }
            // Agregar la clase activa a la siguiente opción
            divOptions.children[activeIndex].classList.add("option--active");
          };
      
          // Definir el intervalo para cambiar la clase activa cada 0.5 segundos
          timerId = setInterval(changeActiveClass, 500);
      
          // Detener el intervalo después de 5 segundos (10 iteraciones de 0.5 segundos)
          setTimeout(() => {
            clearInterval(timerId);
            // Remover la clase activa de todos los elementos con la clase "option"
                divOptions.querySelectorAll(".option").forEach((option) => {
                option.classList.remove("option--active");
                });

                 //Generamos un numero random para elegir la opcion
                let randomNum = Math.floor(Math.random() * optionsArray.length) + 1;
                
                let opcionesActuales = divOptions.querySelectorAll(".option");
                opcionesActuales[randomNum].classList.add("option--active");
          }, 5000);

        }
})