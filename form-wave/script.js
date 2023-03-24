let emailPlaceholder = document.querySelector(".wave--email");
let passPlaceholder = document.querySelector(".wave--password");
const inputEmail = document.querySelector("#email");
const inputPass = document.querySelector("#password");

let valueEmail = "email";
let valuePassword = "password";

for (let i = 0; i < valueEmail.length; i++) {
    emailPlaceholder.innerHTML += `<span class="email--char">${valueEmail[i]}</span>`
}

for (let i = 0; i < valuePassword.length; i++) {
    passPlaceholder.innerHTML += `<span class="pass--char">${valuePassword[i]}</span>`
}

let letrasEmail = document.querySelectorAll(".email--char");
let letrasPassword = document.querySelectorAll(".pass--char");

let leftEmail = 0;

letrasEmail.forEach(letras => {
    letras.style.left = leftEmail + 'px';
    leftEmail += 16;
});

let leftPass = 0;

letrasPassword.forEach(letraPass => {
    letraPass.style.left = leftPass + 'px';
    leftPass += 16;
});

let transitionEmail = 0.2;
let transitionPass = 0.2;

inputEmail.addEventListener("click", ()=> {
    letrasEmail.forEach(letra => {
        letra.style.top = "-1.5em";
        letra.style.transition = transitionEmail + 's';
        transitionEmail += 0.2;
    });
})

inputPass.addEventListener("click", ()=> {
    letrasPassword.forEach(letra => {
        letra.style.top = "-1.5em";
        letra.style.transition = transitionPass + 's';
        transitionPass += 0.2;
    });
})