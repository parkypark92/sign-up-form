const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const telephone = document.getElementById('tel');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password-confirm');

let inputs = [firstName, lastName, email, telephone, password, confirmPassword];

inputs.forEach(element => {
  element.addEventListener('input', () => {
    element.className="";
    if(element.value === "") {
        return;
    }
    else if(element.checkValidity()) {
        element.classList.add('valid');
    } else {
        element.classList.add('invalid');
    }
})  
});
