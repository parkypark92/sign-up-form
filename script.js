const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const telephone = document.getElementById('tel');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password-confirm');
confirmPassword.disabled = true;

const minCharacter = document.getElementById('min-char');
const oneLetter = document.getElementById('one-letter');
const oneNumber = document.getElementById('one-number');


let inputs = [firstName, lastName, email, telephone, password, confirmPassword];

let passCheck = [minCharacter, oneLetter, oneNumber];

inputs.forEach(input => {
  input.addEventListener('input', () => {
    input.className="";
    if(input.value === "") {
        return;
    }
    else if(input.checkValidity()) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
})  
});

password.addEventListener('input', () => {
    passCheck.forEach(check => {
        check.className = "";
    })
    letterCheck(password);
    numberCheck(password);
    minimumCharacterCheck(password);
})

password.addEventListener('input', () => {
    if(password.checkValidity()) {
        confirmPassword.disabled = false;
    } else {
        confirmPassword.disabled = true;
        confirmPassword.value = "";
        confirmPassword.className = "";
    }
})


function letterCheck(userPassword) {
    if(userPassword.value == "") {
        return;
    }
    else if(/[a-zA-Z]/.test(userPassword.value)) {
        oneLetter.classList.add('pass-check-green');
    }
    else {
        oneLetter.classList.add('pass-check-red');
    }
}


function numberCheck(userPassword) {
    if(userPassword.value == "") {
        return;
    }
    else if(/[0-9]/.test(userPassword.value)) {
        oneNumber.classList.add('pass-check-green');
    }
    else {
        oneNumber.classList.add('pass-check-red');
    }
}


function minimumCharacterCheck(userPassword) {
    if(userPassword.value == "") {
        return;
    }
    else if(/.{8,}/.test(userPassword.value)) {
        minCharacter.classList.add('pass-check-green');
    }
    else {
        minCharacter.classList.add('pass-check-red');
    }
}