const links = document.querySelectorAll(".nav__link");
const details = document.querySelectorAll(".detail--link");

links.forEach((link, index) => {
  link.addEventListener("mouseover", () => {
    details[index].style.width = "100%";
    details[index].style.transition = "0.5s";
  });
  link.addEventListener("mouseout", () => {
    details[index].style.width = "";
    details[index].style.transition = "0.5s";
  });
});

const span =  document.querySelector(".span--change");
const emoji = document.querySelector(".emoji");

span.addEventListener("mouseover", () => {
    span.style.cursor = "pointer";
    emoji.style.width = "10em";
    emoji.style.transition = "0.5s";
});

span.addEventListener("mouseout", () => {
    span.style.cursor = "pointer";
    emoji.style.width = "0em";
    emoji.style.transition = "0.5s";
});


let emailPlaceholder = document.querySelector(".wave--email");
let textPlaceholder = document.querySelector(".wave--msg");
const inputEmail = document.querySelector("#email");
const inputText = document.querySelector("#text");

let valueEmail = "email";
let valueMessage = "message";

for (let i = 0; i < valueEmail.length; i++) {
    emailPlaceholder.innerHTML += `<span class="email--char">${valueEmail[i]}</span>`
}

for (let i = 0; i < valueMessage.length; i++) {
    textPlaceholder.innerHTML += `<span class="text--char">${valueMessage[i]}</span>`
}

let letrasEmail = document.querySelectorAll(".email--char");
let letrasMessage = document.querySelectorAll(".text--char");

let leftEmail = 0;

letrasEmail.forEach(letras => {
    letras.style.left = leftEmail + 'px';
    leftEmail += 16;
});

let leftText = 0;

letrasMessage.forEach(letraMessage => {
    letraMessage.style.left = leftText + 'px';
    leftText += 16;
});

let transitionEmail = 0.2;
let transitionMessage = 0.2;

inputEmail.addEventListener("click", ()=> {
    letrasEmail.forEach(letra => {
        letra.style.top = "-1.5em";
        letra.style.transition = transitionEmail + 's';
        transitionEmail += 0.2;
    });
})

inputText.addEventListener("click", ()=> {
    letrasMessage.forEach(letra => {
        letra.style.top = "-1.5em";
        letra.style.transition = transitionMessage + 's';
        transitionMessage += 0.2;
    });
})