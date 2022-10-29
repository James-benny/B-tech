let registrationForm = document.querySelector('#registry-form');
let userName = document.querySelector('#name');
let userEmail = document.querySelector('#email');
let userPassword = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
// let gender = document.querySelector('input [name="gender"]:checked');

registrationForm.addEventListener('submit', createUser)

function createUser(e) {
    e.preventDefault()
    console.log("first")

    let userDetails = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        confirmPassword: confirmPassword.value,
    };

    if (
        userDetails.name == "" 
    ) {
        alert("input your name");
    }   else if(userDetails.email === '') {
        alert("add email")
    }   else if(userDetails.password === '') {
        alert("password");
    }
        else if ((userDetails.password !== userDetails.confirmPassword)) {
            alert("password do not match!!");
        } else {
            console.log(userDetails);
            window.location.href = 'index.html'
        }
}